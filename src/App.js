import React, { useState, useEffect } from 'react';
import './App.css'
import Body from './Components/Body/Body';
import Header from './Components/Header/Header'
import { ApiContext } from './MainContext';
import Axios from 'axios'
import { baseUrl, API_KEY, randomUrl } from './Constants/Constants';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import About from './Components/About/About';
import Favourites from './Components/Favourites/Favourites';




function App() {
  const [search, setSearch] = useState("")
  const [bookData, setBookData] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [showLoadedBooks, setShowLoadedBooks] = useState(true)
  const [loadedBooks, setLoadedBooks]=useState([])
  const [modalItem, setModalItem] = useState()
  const [favItemsFromHome, setFavItemsFromHome]=useState([])
  const [heartColor, setHeartColor] = useState(false)
  

  useEffect(() => {
    setShowLoadedBooks(true)
    Axios.get(randomUrl).then((res)=>{
      setLoadedBooks(res.data.items)
    })
   

  }, [])



  const searchBook = (search) => {
    Axios.get(`${baseUrl}` + search + `&key=${API_KEY}+&maxResults=40`).then((response) => {
      setBookData(response.data.items)
      setShowLoadedBooks(false)
    }).catch((err) => {
      console.log(err);
    })
  }

  const modalSHowHandler = () => {
    setShowModal(true)
    setShowLoadedBooks(false)

  }

  const loadedModalSHowHandler =()=>{
    setShowModal(true)
  }

  const closeModalHandler = () => {
    setShowModal(false)
  }

  const addtoFavHome = (loadedItem)=>{
    // setFavFromHome(loadedItem)
   setFavItemsFromHome([...favItemsFromHome, loadedItem])
   
  }

  const heartColorHandler = (loadedItem)=>{
    console.log(loadedItem);
    favItemsFromHome.some(element=>{
      if (element.volumeInfo.title === loadedItem.volumeInfo.title){
      return setHeartColor(true)
      }else{
        return setHeartColor(false)
      }
    })
  }

  const remFromFavHome=(item)=>{
     setFavItemsFromHome(current =>
      current.filter(removedItem =>{
        return removedItem !== item
      }))
  
  }
  return (
    
    <ApiContext.Provider value=
      {{ search, setSearch, searchBook, 
      bookData, modalSHowHandler, showModal,
       closeModalHandler, showLoadedBooks, loadedBooks, 
      loadedModalSHowHandler, modalItem, setModalItem,
      addtoFavHome, favItemsFromHome, remFromFavHome, heartColor,
      heartColorHandler }}>
      <div >
      <Router>
        <Header />
        <Routes>

        <Route path="/" element={<Body />} exact/>
        <Route path="/favourites" element={<Favourites/>} />
        <Route path='/about' element={<About/>} />

        </Routes>
      </Router>
      </div>
    </ApiContext.Provider>
  );
}

export default App;
