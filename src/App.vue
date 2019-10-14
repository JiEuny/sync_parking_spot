<template>
  <div id="app">

    <!-- <HelloWorld /> -->
    <google-map/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import naver from 'vue-naver-maps'
import GoogleMap from './components/google-map.vue'

var datas;
export default {
  name: 'app',
  components: {
    HelloWorld, 
    GoogleMap
  }
  // methods: {
  //     getData() {
  //       this.$http.get('http://203.253.128.164:1026/v2/entities?options=keyValues&type=ParkingSpot', {
  //           headers:{
  //               "Accept":"application/json",
  //               "X-M2M-RI":"12345",
  //               "X-M2M-Origin":"SM"
  //           }
  //       }).then((res) => {
  //           console.log(res.data)
  //           datas = res.data;
  //       })
  //     }
  // },
  // mounted: function () {

  //     this.getData()
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
