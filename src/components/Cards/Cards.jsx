import Card from "../Card/Card";
import style from "./Cards.module.css";
import { getFavorites, getUserId } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cards(props) {
  const { characters } = props;
  const { onClose } = props;
  const dispatch = useDispatch();
  const idUser = useSelector((state) => state.idUser);

  useEffect(() => {
    dispatch(getFavorites(idUser));
  }, []);

  return (
    <div className={style.container}>
      {characters.map(({ image, name, species, gender, id }) => {
        return (
          <Card
            key={id}
            image={image}
            name={name}
            species={species}
            gender={gender}
            onClose={onClose}
            id={id}
          />
        );
      })}
    </div>
  );
}
