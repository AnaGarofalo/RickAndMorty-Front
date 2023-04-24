import {
  FILTER_FAVORITES,
  GET_FAVORITES,
  GET_USER_ID,
  ORDER_FAVORITES,
} from "./actions";

const initialState = {
  myFavorites: [],
  allFavorites: [],
  idUser: "",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_ID:
      return {
        ...state,
        idUser: action.payload,
      };

    case GET_FAVORITES:
      return {
        ...state,
        myFavorites: action.payload,
        allFavorites: action.payload,
      };

    case FILTER_FAVORITES:
      if (action.payload === "All")
        return { ...state, myFavorites: state.allFavorites };

      return {
        ...state,
        myFavorites: state.allFavorites.filter(
          (character) => character.gender === action.payload
        ),
      };

    case ORDER_FAVORITES:
      return {
        ...state,
        myFavorites: action.payload,
      };

    default:
      return { ...state };
  }
};
