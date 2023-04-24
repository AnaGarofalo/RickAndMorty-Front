// import { agregarFavorito, eliminarFavorito } from "../../redux/actions";
import axios from "axios";
import { getFavorites } from "../../redux/actions";
import URL_BASE from "../../utils/variables";

export default function handleFavorite(
  isFav,
  setIsFav,
  props,
  dispatch,
  idUser
) {
  if (isFav) {
    setIsFav(false);
    axios
      .delete(`${URL_BASE}/fav/${props.id}?idUser=${idUser}`)
      .then((response) => dispatch(getFavorites(idUser)));
  } else {
    setIsFav(true);
    axios
      .post(`${URL_BASE}/fav`, { character: props, idUser: idUser })
      .then((response) => dispatch(getFavorites(idUser)));
  }
}
