import style from "./Card.module.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import handleFavorite from "./functions";
import FavButton from "../FavButton/FavButton";

export default function Card(props) {
  function handleClick() {
    props.onClose(props.id);
  }

  const [isFav, setIsFav] = useState(false);
  const allFavorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    allFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [allFavorites]);

  return (
    <div className={style.container}>
      <div className={style.botones}>
        <FavButton
          handleFavorite={handleFavorite}
          isFav={isFav}
          setIsFav={setIsFav}
          propsCard={props}
          dispatch={dispatch}
        />
        {location.pathname === "/home" ? (
          <button className={style.boton} onClick={handleClick}>
            x
          </button>
        ) : (
          ""
        )}
      </div>
      <img src={props.image} alt="" />
      <Link to={`/detail/${props.id}`}>
        <h2 className={style.nombre}>{props.name}</h2>
      </Link>
      <div className={style.detalles}>
        <div>
          <h4>{props.species}</h4>
        </div>
        <div>
          <h4>{props.gender}</h4>
        </div>
      </div>
    </div>
  );
}
