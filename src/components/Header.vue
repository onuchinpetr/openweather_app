<template>
  <header>
    <div class="city">
      <div class="size-phone">
        <span>{{city}}</span>
        <button class="change-city" @click.prevent="dialog">Сменить город</button>
      </div>
      <input type="text" placeholder="Город" v-model="city">
      <button class="seach-city" @click="featchWeatherclickButton">OK</button>
    </div>
    <div class="temp-control">
      <label for="c" :class="{ active: setLabelC }">
        <input type="radio" id="c" value="metric" v-model="unit" @change="featchWeatherclickButton">C
      </label>
      <label for="f" :class="{ active: setLabelF }">
        <input type="radio" name id="f" value="imperial" v-model="unit" @change="featchWeatherclickButton">F
      </label>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      city: 'Омск',
      unit: 'metric'
    }
  },
  created: function () {
    this.featchWeatherclickButton();
  },
  computed: {
    setLabelC () {
        return this.unit === 'metric';
    },
    setLabelF () {
        return this.unit === 'imperial';
    }
  },
  methods:{
    featchWeatherclickButton() {
      this.$store.dispatch('FETCH_WEATHER', {city: this.city, unit: this.unit});
    },
    dialog() {
      this.city = prompt('Название города', this.city);
      this.featchWeatherclickButton();
    }
  }
}
</script>
