import React, { useEffect, useState } from 'react'
import style from "../style/style.module.css"
import getData from '../utils/getData'

export default function Card() {
    const [noteBookData, setNoteBook] = useState([])

useEffect(() => {
    async function fetchData() {
        try{
            const cardData = await getData("notebook")
            setNoteBook(cardData)
        }catch(error){
            console.error(error)
        }
    }
    fetchData()
}, [])
return (
    <div className={style.cartContainer}>
        {noteBookData?.map((item) => {
            return (
                <div key={`item_${item.id}`} className={style.cartBox}>
                    <img src={item.img} alt="demo" />
                    <h1 className={style.cartBoxTitle}>{item.name}</h1>
                    <p className={style.description}>Процесор: {item.processor}</p>
                    <p className={style.description}>Обʼєм памяті: {item.storage}</p>
                    <button>Купити {item.price} </button>
                </div>
            )
        })}
    </div>
)
}