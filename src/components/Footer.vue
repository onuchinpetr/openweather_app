<template>
  <footer>
    <div>
      <span>Ветер</span>
      <span class="params">{{wind}}</span>
    </div>
    <div>
      <span>Давление</span>
      <span class="params">{{pressure}}</span>
    </div>
    <div>
      <span>Влажность</span>
      <span class="params">{{humidity}}</span>
    </div>
    <div>
      <span>Вероятность дождя</span>
      <span class="params">{{chanceRain}}</span>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['wind', 'pressure', 'humidity', 'chanceRain']
}
</script>

