import {
  GET_ALL_VIDEOGAMES,
  GET_GENRES,
  GET_BY_NAME,
  GET_BY_GENRE,
  GET_GAMES_DBORAPI,
  GET_SORT,
  GET_RATING,
  ERROR,
  CLOSE_ERROR,
  RESET_HOME,
  DELETE_VIDEOGAME,
  GET_PLATFORMS,
  GET_FILTERS,
} from "./actions.js";

const initialState = {
  videogames: [],
  filtered: [],
  filtered2: [],
  filtered3: [],
  genres: [],
  platforms: [],
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
        filtered3: a,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        filtered: action.payload,
        filtered2: action.payload,
        filtered3: action.payload,
      };
    case GET_SORT:
      const sort =
        action.payload === "asc"
          ? state.filtered.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : action.payload === "des"
          ? state.filtered.sort((a, b) => {
              if (a.name < b.name) return 1;
              if (a.name > b.name) return -1;
              return 0;
            })
          : [...state.filtered];
      return {
        ...state,
        filtered: sort,
        filtered2: sort,
        filtered3: sort,
      };
    case GET_RATING:
      let rating =
        action.payload === "men"
          ? state.filtered.sort((a, b) => a.rating - b.rating)
          : action.payload === "may"
          ? state.filtered.sort((a, b) => b.rating - a.rating)
          : [...state.filtered];
      return {
        ...state,
        filtered: rating,
        filtered2: rating,
      };
    case ERROR:
      return {
        ...state,
        filtered: [],
        error: true,
      };
    case CLOSE_ERROR:
      return {
        ...state,
        error: false,
      };
    case RESET_HOME:
      return {
        ...state,
        filtered: state.videogames,
        filtered2: state.videogames,
      };
    case DELETE_VIDEOGAME:
      return {
        ...state,
        filtered: state.filtered.filter((e) => e.id !== action.payload),
      };
    case GET_FILTERS:
      let games = state.videogames;
      if (action.payload.genre) {
        games = state.videogames?.filter((e) => {
          return e.genres.includes(action.payload.genre) && e;
        });
      }
      if (action.payload.apiODb) {
        if (action.payload.apiODb === "api") {
          games = state.videogames.filter((e) => !e.created);
        } else {
          games = state.videogames.filter((e) => e.created === true);
        }
      }
      let errors = !games.length && true;
      return {
        ...state,
        filtered: games,
        error: errors ? !state.error : state.error,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
