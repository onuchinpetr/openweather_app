import Vue from 'vue'
import Vuex from 'vuex'
import {AXIOS} from './http-common';

Vue.use(Vuex)

const apiKey = '45509c19c0452a3d36d829de07e866b1';

export default new Vuex.Store({
  state: {
    temp: null,
    wind: null,
    pressure: null,
    chanceRain: null,
    humidity: null,
    weatherIcon: null
  },
  mutations: {
    SET_WEATHERICON(state, payload) {
      state.weatherIcon = changeIcon(payload);
    },
    SET_TEMP(state, payload) {
      state.temp = Math.round(payload);
    },
    SET_WIND(state, payload) {
      state.wind = changeWind(payload);
    },
    SET_PRESSURE(state, payload) {
      state.pressure = (payload * 0,750) + " мм рт. ст.";
    },
    SET_CHANCERAIN(state, payload) {
      state.chanceRain = payload + "%";
    },
    SET_HUMIDITY(state, payload) {
      state.humidity = payload + "%";
    }
  },
  actions: {
    FETCH_WEATHER ({commit}, payload) {
      AXIOS.get('/weather', {
        params: {
          q : payload.city ,
          APPID: apiKey,
          units: payload.unit,
          lang: 'ru'
        }  
      })
      .then( response => {
        commit('SET_TEMP', response.data.main.temp);
        commit('SET_WIND', {wind: response.data.wind, unit: payload.unit});
        commit('SET_PRESSURE', response.data.main.pressure);
        commit('SET_CHANCERAIN', response.data.clouds.all);
        commit('SET_HUMIDITY', response.data.main.humidity);
        commit('SET_WEATHERICON', response.data.weather[0].icon);
      })
    }
  },
  getters: {
    GET_WEATHERICON: state => {
      return state.weatherIcon;
    },
    GET_TEMP: state => {
      return state.temp;
    },
    GET_WIND: state => {
      return state.wind;
    },
    GET_PRESSURE: state => {
      return state.pressure;
    },
    GET_CHANCERAIN: state => {
      return state.chanceRain;
    },
    GET_HUMIDITY: state => {
      return state.humidity;
    }
  }
})

function changeIcon(payload) {
  console.log("http://openweathermap.org/img/w/" + payload + ".png")
  return "http://openweathermap.org/img/w/" + payload + ".png"
} 
function changeWind(payload){
  console.log(payload.unit)
  const val =  Math.floor((payload.wind.deg / 45) + 0.5);
  const arr = ["северный","северо-восточный","восточный", "юго-восточный","южный","юго-западный","западный","северо-западный"];
  if (payload.unit === "metric") {
    return  payload.wind.speed + " м/с, " + arr[(val % 8)]
  } else {
    return payload.wind.speed + " миль/час, " + arr[(val % 8)]
  }
}