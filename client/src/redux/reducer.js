import {
  GET_ALL_VIDEOGAMES,
  GET_DETAIL,
  GET_GENRES,
  GET_BY_NAME,
  GET_BY_GENRE,
  GET_GAMES_DBORAPI,
  GET_SORT,
  GET_RATING,
  ERROR,
} from "./actions.js";

const initialState = {
  videogames: [],
  filtered: [],
  genres: [],
  videogameDetail: {},
  filtered2: [],
  error: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      const a = [...action.payload];
      return {
        ...state,
        videogames: action.payload,
        filtered: a,
        filtered2: a,
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
        filtered2: action.payload,
      };
    case GET_BY_GENRE:
      let av = [...state.videogames];
      let gf = av?.filter((e) => {
        return e.genres.includes(action.payload) && e;
      });
      let err = !gf.length && true;
      return {
        ...state,
        filtered: gf,
        filtered2: gf,
        error: err ? !state.error : state.error,
      };
    case GET_GAMES_DBORAPI:
      let Api = state.filtered2.filter((e) => !e.created);
      let Db = state.filtered2.filter((e) => e.created === true);
      return {
        ...state,
        filtered: action.payload === "api" ? Api : Db,
      };
    case GET_SORT:
      const sort =
        action.payload === "asc"
          ? state.filtered.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : state.filtered.sort((a, b) => {
              if (a.name < b.name) return 1;
              if (a.name > b.name) return -1;
              return 0;
            });
      return {
        ...state,
        filtered: sort,
        filtered2: sort,
      };
    case GET_RATING:
      let rating =
        action.payload === "men"
          ? state.filtered.sort((a, b) => a.rating - b.rating)
          : action.payload === "may"
          ? state.filtered.sort((a, b) => b.rating - a.rating)
          : state.filtered;
      return {
        ...state,
        filtered: rating,
        filtered2: rating,
      };
    case ERROR:
      return {
        error: !state.error,
        filtered: [],
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
