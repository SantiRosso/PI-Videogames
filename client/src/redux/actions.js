import axios from "axios";
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_DETAIL = "GET_DETAIL";
export const GET_GENRES = "GET_GENRES";
export const GET_BY_NAME = "GET_BY_NAME";

export const getAllVideogames = () => {
  return async (dispatch) => {
    return axios.get("http://localhost:3001/videogames").then((response) => {
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
      dispatch({ type: GET_GENRES, payload: response });
    });
  };
};

export const getByName = (name) => {
  return async (dispatch) => {
    return axios
      .get(`http://localhost:3001/videogames?name=${name}`)
      .then((response) => {
        dispatch({ type: GET_BY_NAME, payload: response });
      });
  };
};
