import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"
import {NavLink, useLocation} from "react-router-dom"
import SelectorsFavorite from "../SelectorsFavorite/SelectorsFavorite"

export default function Nav(props){

  const location=useLocation()
  
    return (
      <div className={style.container}>
        <div className={style.containerBotones}> 
          <NavLink to="/home" className={({ isActive }) =>
                isActive ? style.active : style.boton
              }><p>Home</p>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) =>
                isActive ? style.active : style.boton
              } > <p >About</p>
          </NavLink>
          <NavLink to="/favorites" className={({ isActive }) =>
                isActive ? style.active : style.boton
              } > <p >Favorites</p>
          </NavLink>

          {location.pathname==="/favorites" ? <SelectorsFavorite/> :""}
        <button className={style.botonLogout} onClick={props.logout}>Logout</button>
        </div>
        <div className={style.containerSearchBar}>
          <SearchBar onSearch={props.onSearch} setCharacters={props.setCharacters} characters={props.characters}/>
        </div>
      </div>
    )
}