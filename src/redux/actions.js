import axios from "axios";
import URL_BASE from "../utils/variables";

export const GET_FAVORITES = "GET_FAVORITES";
export const FILTER_FAVORITES = "FILTER_FAVORITES";
export const ORDER_FAVORITES = "ORDER_FAVORITES";
export const GET_USER_ID = "GET_USER_ID";

export const getUserId = (username) => {
  return async function (dispatch) {
    try {
      const userId = await axios.get(
        `${URL_BASE}/login/getUserId?email=${username}`
      );
      dispatch({ type: GET_USER_ID, payload: userId.data.idUser });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };
};

export const getFavorites = (idUser) => {
  return async function (dispatch) {
    try {
      console.log(idUser);
      const data = await axios(`${URL_BASE}/fav/${idUser}`);
      dispatch({ type: GET_FAVORITES, payload: data.data });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };
};

export const filterFavorites = (gender) => {
  return {
    type: FILTER_FAVORITES,
    payload: gender,
  };
};

export const orderFavorites = (orden, idUser) => {
  return async function (dispatch) {
    try {
      const data = await axios(`${URL_BASE}/fav/${idUser}`);
      let favoritos = data.data;

      if (orden === "Ascendente") {
        favoritos = favoritos.sort(function (x, y) {
          if (x.id > y.id) return 1;
          if (x.id < y.id) return -1;
          return 0;
        });
      }
      if (orden === "Descendente") {
        favoritos = favoritos.sort(function (x, y) {
          return y.id - x.id;
        });
      }

      dispatch({
        type: ORDER_FAVORITES,
        payload: favoritos,
      });
    } catch (error) {
      window.alert("Oops! An error has happened");
    }
  };
};
