/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import './App.css'
import SignUP from './components/SignUp'
import Login from './components/Login'
import Compte from './components/Compte'
import { onAuthStateChanged, updateCurrentUser } from 'firebase/auth'
import { auth } from './firebase'
import { db  } from './firebase'
import { getDocs , collection , addDoc , deleteDoc, updateDoc ,doc } from 'firebase/firestore'

function App() {
  const [movieList, setMovieList] = useState([])
  const moviesCollectionRef = collection(db,"movies")

  const [newMovieTitle, setNewMovieTitle] = useState("")
  const [newReleasedDate, setNewReleaseDate] = useState(0)
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(false)

  const [updatedTitle , setUpdatedTitle] = useState("")


  const [connect, setConnect] = useState(false)

  const deleteMovie = async (id) => {
    const movieDoc = doc(db,"movies", id)
    await deleteDoc(movieDoc);

  }
  const updateMovieTitle = async (id) => {
    const movieDoc = doc(db,"movies", id)
    await updateDoc(movieDoc , {title: updatedTitle});

  }
  
  const getMovieList = async () => {
    try {
    const data = await getDocs(moviesCollectionRef)
    const filteredData = data.docs.map((doc)=> ({...doc.data(), id: doc.id}))
    setMovieList(filteredData)
    } catch(err) {
      console.error(err);
    }
  }



useEffect(() => {
  

  getMovieList();
}, [])

  const onSubmitMovie = async () => {
    try {
    await addDoc(moviesCollectionRef,{
      title: newMovieTitle ,
      releaseDate: newReleasedDate , 
      receivedAnOscar: isNewMovieOscar,
      })
    getMovieList()  
  } catch (err) {
    console.error(err)
    }
  };

 
  useEffect( () => {

    onAuthStateChanged (auth , (user)=>{

      if(user){
        setConnect(true)
      } else {
        setConnect(false)
      }

    })},[])

  return (
    <>
      {connect ? <Compte/> : <Login/>}

      <div>
        <input placeholder="Movie title..." onChange={(e) => setNewMovieTitle(e.target.value)} />
        <input placeholder="Movie Release Date..." type="number" onChange={(e) => setNewReleaseDate(Number(e.target.value))} />
        <input type="checkbox"  onChange={(e) => setIsNewMovieOscar(e.target.checked)} />
        <label>Received an oscar</label>
        <button onClick={onSubmitMovie}>Submit Movie</button>
      </div>



      {movieList.map((movie)=> (
      <div>
        <h1 style={{color: movie.receivedAnOscar ? "green" : "red"}}>{movie.title}</h1>
        <p>Date: {movie.releaseDate}</p>
        <button onClick={()=> deleteMovie(movie.id)}>Delete Movie</button>

        <input placeholder='new title...' onChange={(e)=> setUpdatedTitle(e.target.value)} />
        <button onClick={() => updateMovieTitle(movie.id)}>Update</button>
      </div>
    ))}
    </>
  )
}

export default App
