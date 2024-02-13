import './App.css';
import React, { useEffect, useState } from 'react'
import Header from './components/header';
import Catalog from './pages/catalog';
import getData from './utils/getData'

const LOCAL_STORAGE_KEY = "searchText"

function App() {
  const [searchText, setSearchText] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
  const [noteBookData, setNoteBook] = useState([])
  const [noteBookDataCnt, setNoteBookCnt] = useState(0)
  const [page, setPage] = useState(1)
  const cntPerPage = 3
  
  useEffect(()=>{
    getData("notebook", searchText, page, cntPerPage).then(data => setNoteBook(data))
  }, [searchText, page])

  useEffect(()=>{
    getData("notebook", searchText, 1, 1000).then(data => setNoteBookCnt(Math.ceil(data.length/cntPerPage)))
  }, [searchText])

  function inputSearchChange(e) {
    setSearchText(e.target.value)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(e.target.value));
  }

  function onChangePage(e, page){
    setPage(page);
  }

  return (
    <div className="App">
      <Header searchText={searchText} inputSearchChange={inputSearchChange} />
      <Catalog noteBookData={noteBookData} noteBookDataCnt={noteBookDataCnt} page={page} onChangePage={onChangePage} />
    </div>
  );
}

export default App;
