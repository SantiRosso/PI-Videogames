import {
  GET_ALL_VIDEOGAMES,
  GET_DETAIL,
  GET_GENRES,
  GET_BY_NAME,
  GET_BY_GENRE,
  GET_GAMES_DBORAPI,
} from "./actions.js";

const initialState = {
  videogames: [],
  filtered: [],
  genres: [],
  videogameDetail: {},
  // loader: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        filtered: action.payload,
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
        filtered: action.payload,
      };
    case GET_BY_GENRE:
      let av = [...state.videogames];
      let gf = av?.filter((e) => {
        return e.genres.includes(action.payload) && e;
      });
      return {
        ...state,
        filtered: gf,
      };
    case GET_GAMES_DBORAPI:
      let Api = state.videogames.filter((e) => !e.created);
      let Db = state.videogames.filter((e) => e.created === true);
      return {
        ...state,
        filtered: action.payload === "api" ? Api : Db,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
