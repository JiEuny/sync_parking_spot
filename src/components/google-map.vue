<template>
<div>
  <div class="google-map" :id="mapName"/>
  <br/>
    <button v-on:click="refresh">Refresh</button>
    <br/>
    <br/>
    <div class="text-box"><br/>GET {{urls}}
      <br/><br/>Response:
      <pre>{{response}}</pre><br/></div>
  </div>
  
</template>

<script>
import axios from 'axios';
var url = 'http://203.253.128.164:1026/v2/entities?options=keyValues&type=ParkingSpot';

export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + "-map",
      markerCoordinates: [],
      response: '',
      urls: ''
    }
  },
  methods: {

    refresh: function() {
      axios.get(url)
        .then(res => {
          this.response = JSON.stringify(res.data, null, 2);
          // console.log(res.data)
          this.markerCoordinates = [];
          for(var i=0; i<res.data.length; i++) {
            this.markerCoordinates.push({latitude:res.data[i].location.coordinates[1], longitude:res.data[i].location.coordinates[0], status:res.data[i].status})
          }

          this.drawMap();
        })
    },
    drawMap: function() {
      const element = document.getElementById(this.mapName)

      const options = {
        zoom: 18,
        center: new google.maps.LatLng(37.411161, 127.129544)
      }

      const map = new google.maps.Map(element, options);

      for (var i=0; i < this.markerCoordinates.length; i++) {
        if ( this.markerCoordinates[i].status == 'free' ) {

          const position = new google.maps.LatLng(this.markerCoordinates[i].latitude, this.markerCoordinates[i].longitude);
          const icon = "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
          const marker = new google.maps.Marker({ 
            position,
            map,
            icon
          });
        } else {
          const position = new google.maps.LatLng(this.markerCoordinates[i].latitude, this.markerCoordinates[i].longitude);
          const icon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
          const marker = new google.maps.Marker({ 
            position,
            map,
            icon
          });
        }
      }
    }

  },
  
  mounted: function () {
    this.urls = url;

    axios.get(url) 
      .then(res => {
        this.markerCoordinates = [];
        this.response = res.data;
        for(var i=0; i<res.data.length; i++) {
          this.markerCoordinates.push({latitude:res.data[i].location.coordinates[1], longitude:res.data[i].location.coordinates[0], status:res.data[i].status})
        }

        this.drawMap();

      })

  }
};
</script>

<style scoped>
.google-map {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: gray;
}

.text-box {
  width: 800px;
  margin: 0 auto;
  text-align: left;
  background:whitesmoke ;
}
</style>
