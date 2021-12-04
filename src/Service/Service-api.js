import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "a92e1c28ff5839246667e5b68c28f141";

export const getImages = (page) =>
  axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`);

export const getFilmDetails = (id) =>
  axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
