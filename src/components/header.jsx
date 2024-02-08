import React from 'react'
import s from "../style/header.module.css"

export default function Header() {
    return (
        <div className={s.frame}>
          <div className={s.div}>
            <form className={s.div2}>
              <div className={s.textWrapper}>Serach any things</div>
              <div className={s.divWrapper}>
                <input
                  className={s.textWrapper2}

                />
                <button type="submit">Search</button>
              </div>
            </form>
          </div>
        </div>
    );
}
// const input = document.querySelector(input)

// input.addEventListener("input", onInputChange)

// function onInputChange(e){
//     e.preventDefault()
//     const inputValue = e.currentTarget.value
// }