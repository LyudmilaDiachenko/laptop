import React from 'react'
import Cards from '../components/cards'

export default function Catalog(props) {
  return (
    <div>
        <h1>Laptop</h1>
        <Cards noteBookData={props.noteBookData} />
    </div>
  )
}
