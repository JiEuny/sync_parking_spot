<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + "-map",
      markerCoordinates: []
    }
  },
  mounted: function () {

    axios.get('http://203.253.128.164:1026/v2/entities?options=keyValues&type=ParkingSpot')
      .then(res => {

        for (var i=0; i < res.data.length; i++) {
          this.markerCoordinates.push({latitude:res.data[i].location.coordinates[1], longitude:res.data[i].location.coordinates[0], status:res.data[i].status} )

        }

        for (var i=0; i < res.data.length; i++) {
          if ( this.markerCoordinates[i].status == "free" ) {
            console.log(this.markerCoordinates[i].status)
            this.markerCoordinates.forEach((coord) => {
              const position = new google.maps.LatLng(coord.latitude, coord.longitude);
              const icon = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
              const marker = new google.maps.Marker({ 
                position,
                map,
                icon
              });
            });
          } else {
            this.markerCoordinates.forEach((coord) => {
              const position = new google.maps.LatLng(coord.latitude, coord.longitude);
              const icon = "http://maps.google.com/mapfiles/ms/icons/pink-dot.png"
              const marker = new google.maps.Marker({ 
                position,
                map              
              });
            });
          }
        }
      }).catch(err => console.log(err));

    const element = document.getElementById(this.mapName)

    const options = {
      zoom: 18,
      center: new google.maps.LatLng(37.403739, 127.159999)
    }

    const map = new google.maps.Map(element, options);

    this.markerCoordinates.push({latitude:37.403739, longitude:127.159999, status:"free"})
   
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
</style>
