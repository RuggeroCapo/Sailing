<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
          <h3 class="nameground gaugetext" >APPARENT WIND SPEED</h3>
          <gauge @click="alert('hello')" draggable="true"  v-bind:angolo="sensorData.aws" id="aws"></gauge>
      </swiper-slide>
      <swiper-slide>
        <h3 class="nameground gaugetext" >TRUE WIND ANGLE</h3>
        <wind-gauge draggable="true" v-bind:angolo="sensorData.twa" id="twa" ></wind-gauge>
      </swiper-slide>
      <swiper-slide>
        <h3 class="nameground gaugetext" >TARGET ANGLE</h3>
        <wind-gauge draggable="true" v-bind:angolo="sensorData.togp" id="togp" ></wind-gauge>
      </swiper-slide>
      <swiper-slide>
        <h3 class="nameground gaugetext" >COURSE OVER GROUND</h3>
        <gauge draggable="true" v-bind:angolo="sensorData.cog" id="cog" ></gauge>
      </swiper-slide>
      <swiper-slide>
        <h3 class="nameground gaugetext" >MAGNETIC HEADING</h3>
        <gauge draggable="true" v-bind:angolo="sensorData.mh" id="mh" ></gauge>
      </swiper-slide>
      <swiper-slide>
        <p class="title gaugetext">SPEED OVER GROUND</p>
        <p draggable="true" class="value sog">{{sensorData.sog}}</p>
      </swiper-slide>
      <swiper-slide>
        <p class="title gaugetext">SPEED OVER WATER</p>
        <p draggable="true" class="value sow">{{sensorData.sow}}</p>
      </swiper-slide>
      <swiper-slide>
        <p class="title gaugetext">VMG</p>
        <p draggable="true" class="value data2">{{sensorData.data2}}</p>
      </swiper-slide>
      <swiper-slide>
        <p class="title gaugetext">DELTA VPP [%]</p>
        <p draggable="true" class="value data1">{{sensorData.data1}}</p>
      </swiper-slide>
    </swiper>
    <div class="btn_container">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import gauge from "./compass/coordinates";
import windGauge from "./compass/wind";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { sensors } from "./mixins/fetch.js";
export default {
  mixins: [sensors],
  data() {
    return {
      sensorData: sensors,
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 30,
        simulateTouch: false,
        draggable: "false",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  components: {
    "wind-gauge": windGauge,
    gauge,
    swiper,
    swiperSlide
  }
};
</script>
<style>
.btn_container {
  position: relative;
  z-index: 100;
}
.gaugeCanvas {
  width: auto;
  height: 22vh;
}
.gaugetext {
  font-family: "Roboto Mono", monospace;
  font-size: 1em;
  line-height: 1em;
  font-weight: 800;
  text-align: left !important;
}
.value {
  font-family: "Roboto Mono", monospace;
  font-size: 4em;
  margin-left: 80px;
  height: 22vh;
}
</style>
