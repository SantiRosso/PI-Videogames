import axios from "axios";
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_DETAIL = "GET_DETAIL";
export const GET_GENRES = "GET_GENRES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_GENRE = "GET_BY_GENRE";
export const GET_GAMES_DBORAPI = "GET_GAMES_DBORAPI";
export const GET_SORT = "GET_SORT";
export const GET_RATING = "GET_RATING";

export const getAllVideogames = () => {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:3001/videogames")
      .then((response) => {
        dispatch({ type: GET_ALL_VIDEOGAMES, payload: response.data });
      });
  };
};

export const getDetail = (id) => {
  return async (dispatch) => {
    return await axios
      .get(`http://localhost:3001/videogame/${id}`)
      .then((response) => {
        dispatch({ type: GET_DETAIL, payload: response.data });
      });
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    return axios.get("http://localhost:3001/genres").then((response) => {
      dispatch({ type: GET_GENRES, payload: response.data });
    });
  };
};

export const getByName = (name) => {
  return async (dispatch) => {
    return await axios
      .get(`http://localhost:3001/videogames?name=${name}`)
      .then((response) => {
        dispatch({ type: GET_BY_NAME, payload: response.data });
      });
  };
};

export const getByGenre = (name) => {
  return (dispatch) => {
    dispatch({ type: GET_BY_GENRE, payload: name });
  };
};

export const getGamesDbOrApi = (payload) => {
  return (dispatch) => {
    dispatch({ type: GET_GAMES_DBORAPI, payload });
  };
};

export const getSort = (payload) => {
  return (dispatch) => dispatch({ type: GET_SORT, payload });
};

export const getRating = (payload) => {
  return (dispatch) => dispatch({ type: GET_RATING, payload });
};
// export const setLoader = () => {

// }
