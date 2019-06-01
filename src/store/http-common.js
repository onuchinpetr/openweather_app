import axios from 'axios'

export const AXIOS = axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5`
});