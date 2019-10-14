<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
var datas;
export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + "-map",
      markerCoordinates: []
    }
  },
  methods: {
      getData() {
        this.$http.get('http://203.253.128.164:1026/v2/entities?options=keyValues&type=ParkingSpot', {
            headers:{
                "Accept":"application/json",
                "X-M2M-RI":"12345",
                "X-M2M-Origin":"SM"
            }
        }).then((res) => {
            console.log(res.data)
            datas = res.data;
        })
      }
  },
  mounted: function () {

      this.getData()

    const element = document.getElementById(this.mapName)

    const options = {
      zoom: 18,
      center: new google.maps.LatLng(37.403739, 127.159999)
    }

    const map = new google.maps.Map(element, options);

    this.markerCoordinates.push({latitude:37.403739, longitude:127.159999})
    this.markerCoordinates.forEach((coord) => {
        const position = new google.maps.LatLng(coord.latitude, coord.longitude);
        const marker = new google.maps.Marker({ 
            position,
            map
        });
    });
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
