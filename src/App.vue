<style lang="scss">
@import "./assets/styles/main.scss";
</style>

<template>
  <div id="app">
    <Header />
    <Main :temp="temp" :weatherIcon="weatherIcon" />
    <Footer :wind="wind" :pressure="pressure" :humidity="humidity" :chanceRain="chanceRain"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  },
  computed: {
    city () {
      return this.$store.getters.GET_CITY;
    },
    unit () {
      return this.$store.getters.GET_UNIT;
    },
    weatherIcon (){
      return this.$store.getters.GET_WEATHERICON;
    },
    temp () {
        return this.$store.getters.GET_TEMP;
    },
    wind () {
      return this.$store.getters.GET_WIND;
    },
    pressure () {
      return this.$store.getters.GET_PRESSURE;
    },
    humidity () {
      return this.$store.getters.GET_HUMIDITY;
    },
    chanceRain () {
      return this.$store.getters.GET_CHANCERAIN;
    }
  }
}
</script>
