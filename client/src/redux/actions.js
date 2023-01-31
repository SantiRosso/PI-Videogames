import axios from "axios";
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_GENRE = "GET_BY_GENRE";
export const GET_GAMES_DBORAPI = "GET_GAMES_DBORAPI";
export const GET_SORT = "GET_SORT";
export const GET_RATING = "GET_RATING";
export const ERROR = "ERROR";
export const CLOSE_ERROR = "CLOSE_ERROR";
export const RESET_HOME = "RESET_HOME";
export const DELETE_VIDEOGAME = "DELETE_VIDEOGAME";
export const GET_PLATFORMS = "GET_PLATFORMS";

export const getAllVideogames = () => {
  return async (dispatch) => {
    return await axios.get("/videogames").then((response) => {
      dispatch({ type: GET_ALL_VIDEOGAMES, payload: response.data });
    });
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    return await axios.get("/genres").then((response) => {
      dispatch({ type: GET_GENRES, payload: response.data });
    });
  };
};

export const getPlatforms = () => {
  return async (dispatch) => {
    return await axios.get("/platforms").then((response) => {
      dispatch({ type: GET_PLATFORMS, payload: response.data });
    });
  };
};

export const getByName = (name) => {
  return async (dispatch) => {
    let result = await axios.get(`/videogames?name=${name}`);
    if (result.data) {
      return dispatch({ type: GET_BY_NAME, payload: result.data });
    } else {
      return dispatch({ type: ERROR });
    }
  };
};

export const getByGenre = (name) => {
  return { type: GET_BY_GENRE, payload: name };
};

export const getGamesDbOrApi = (payload) => {
  return { type: GET_GAMES_DBORAPI, payload };
};

export const getSort = (payload) => {
  return { type: GET_SORT, payload };
};

export const getRating = (payload) => {
  return { type: GET_RATING, payload };
};

export const setError = () => {
  return { type: CLOSE_ERROR };
};

export const resetHome = () => {
  return { type: RESET_HOME };
};

export const deleteVideogame = (id) => {
  return async (dispatch) => {
    return dispatch({ type: DELETE_VIDEOGAME, payload: id });
  };
};
