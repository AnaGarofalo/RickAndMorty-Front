import { useDispatch, useSelector } from "react-redux";
import { orderFavorites, filterFavorites } from "../../redux/actions";
import style from "./SelectorsFavorite.module.css";

const SelectorsFavorite = () => {
  const dispatch = useDispatch();
  const idUser = useSelector((state) => state.idUser);

  const handleOrder = (event) => {
    dispatch(orderFavorites(event.target.value, idUser));
  };

  const handleFilter = (event) => {
    dispatch(filterFavorites(event.target.value));
  };

  return (
    <div>
      <select className={style.selector} name="Orden" onChange={handleOrder}>
        <option value="PorDefecto">Order...</option>
        <option value="Ascendente">Ascendant</option>
        <option value="Descendente">Descendant</option>
      </select>
      <select className={style.selector} name="Género" onChange={handleFilter}>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};
export default SelectorsFavorite;
