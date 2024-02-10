import React from 'react'
import style from "../style/style.module.css"

export default function Cards(props) {
    return (
        <div className={style.cartContainer}>
            {props.noteBookData?.map((item) => {
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