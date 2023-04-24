import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Favorites.module.css";
import Card from "../Card/Card";
import { getFavorites } from "../../redux/actions";

function Favorites() {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const idUser = useSelector((state) => state.idUser);
  useEffect(() => {
    dispatch(getFavorites(idUser));
  }, []);
  return (
    <div className={style.container}>
      {myFavorites.map(({ image, name, species, gender, id }) => {
        return (
          <Card
            key={id}
            image={image}
            name={name}
            species={species}
            gender={gender}
            onClose={() => {}}
            id={id}
          />
        );
      })}
    </div>
  );
}
export default Favorites;
