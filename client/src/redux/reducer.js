import {
  GET_ALL_VIDEOGAMES,
  GET_DETAIL,
  GET_GENRES,
  GET_BY_NAME,
} from "./actions.js";

const initialState = {
  videogames: [],
  genres: {},
  videogameDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        videogameDetail: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        videogames: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
