import s from "../style/header.module.css"

export default function Header(props) {
    return (
        <div className={s.frame}>
          <div className={s.div}>
            <form className={s.div2}>
              <div className={s.textWrapper}>Search any things</div>
              <div className={s.divWrapper}>
                <input
                    className={s.textWrapper2}
                    placeholder='Search'
                    onChange={props.inputSearchChange}
                    value={props.searchText}
                />
                <button type="button">Search</button>
              </div>
            </form>
          </div>
        </div>
    );
}