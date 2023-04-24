import { useSelector } from "react-redux";
import style from "./FavButton.module.css";

function FavButton({ handleFavorite, isFav, setIsFav, propsCard, dispatch }) {
  const idUser = useSelector((state) => state.idUser);
  return (
    <>
      {isFav ? (
        <button
          className={style.favorite}
          onClick={() => {
            handleFavorite(isFav, setIsFav, propsCard, dispatch, idUser);
          }}
        >
          ❤️
        </button>
      ) : (
        <button
          className={style.favorite}
          onClick={() => {
            handleFavorite(isFav, setIsFav, propsCard, dispatch, idUser);
          }}
        >
          🤍
        </button>
      )}
    </>
  );
}

export default FavButton;
