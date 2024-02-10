import './App.css';
import React, { useEffect, useState } from 'react'
import Header from './components/header';
import Catalog from './pages/catalog';
import getData from './utils/getData'

const LOCAL_STORAGE_KEY = "searchText"

function App() {
  const [searchText, setSearchText] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
  const [noteBookData, setNoteBook] = useState([])
  
  useEffect(()=>{
    getData("notebook", searchText).then(data => setNoteBook(data))
  }, [searchText])

  function inputSearchChange(e) {
    setSearchText(e.target.value)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(e.target.value));
  }

  return (
    <div className="App">
      <Header searchText={searchText} inputSearchChange={inputSearchChange} />
      <Catalog noteBookData={noteBookData} />
    </div>
  );
}

export default App;
