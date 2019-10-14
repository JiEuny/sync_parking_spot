<template>
  <div>
    <naver-maps 
      :width="600" 
      :height="400" 
      :mapOptions="mapOptions"
      @load="onLoad">
      <naver-marker 
        :lat="37.3614483" 
        :lng="127.1114883" 
        @click="onMarkerClicked" 
        @load="onMarkerLoaded"></naver-marker>
    </naver-maps>

  </div>
</template>

<script>
import naver from '../main.js'
  export default {
    name: 'HelloWorld',
    props: [],
    data() {
      return {
        info: false,
        marker: null,
        count: 1,
        map: null,
        mapOptions: {
          lat: 37.403798,
          lng: 127.159843,
          zoom: 12,
          zoomControl: true,
          zoomControlOptions: {position: 'TOP_RIGHT'},
          mapTypeControl: true,
        },
      }
    },
    computed: {
      hello() {
        return `Hello, World! × ${this.count}`;
      }
    },
    methods: {
      onLoad(vue) {
      },
      onWindowLoad(that) {
      },
      onMarkerClicked(event) {
        this.info = !this.info;
      },
      onMarkerLoaded(vue) {
        this.marker = vue.marker;
      }
    },
    mounted() {
      setInterval(() => this.count++, 1000);
    }
  }
</script>
<style scoped>
  .info-window-container {
    padding: 10px;
    width: 300px;
    height: 100px;
  }
</style>