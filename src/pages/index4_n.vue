<template>
  <div>
  <swipergauges @click="click" @dragstart="start" @dragend="end"></swipergauges>
    <b-container fluid class="d-sm-none d-none d-md-block">
     <b-row>
       <b-col class="lg-6">
        <line-chart @drop="drop" :data="chartData" :curve="false" height="60vh" xtitle= "Time" ytitle= "Value"></line-chart>
       </b-col>
       <b-col class="lg-6">
        <line-chart :data="chartData" :curve="false" height="60vh" xtitle= "Time" ytitle= "Value"></line-chart>
       </b-col>
     </b-row>
    </b-container>
    <b-container fluid class="d-md-none d-block">
     <b-row>
       <b-col class="lg-12">
           <swiper :options="swiperOption">
              <swiper-slide>
                  <line-chart @drop="drop" :data="chartData" :curve="false" height="60vh" xtitle= "Time" ytitle= "Value"></line-chart>
              </swiper-slide>
               <swiper-slide>
                  <line-chart @drop="drop" :data="chartData" :curve="false" height="60vh" xtitle= "Time" ytitle= "Value"></line-chart>
              </swiper-slide>
           </swiper>
       </b-col>
     </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import SwiperGauges from "../components/swipergauge.vue";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import {
  getHistoryWithTime,
  getStorage,
  getLastValue
} from "../components/mixins/history.js";
export default {
  components: {
    swipergauges: SwiperGauges,
    swiper,
    swiperSlide
  },
  data() {
    return {
      chartData: [[]],
      draggedElement: "",
      draggedElement2: ""
    };
  },
  methods: {
    click: function(event) {
      alert("startdrag");
      this.draggedElt = event.target;
    },
    start: function(event) {
      alert("startdrag");
      this.draggedElt = event.target;
    },
    end: function(event) {
      alert("enddrag");
      this.draggedElt = undefined;
    },
    drop: function(event) {
      this.draggedElement = this.draggedElt;
      alert(thi.draggedElement);
    }
  },
  created: function() {
    var storage = getStorage();
    setInterval(
      function() {
        storage = getStorage();
        if (this.draggedElement != "") {
          this.chartData = getHistoryWithTime(storage[this.draggedElement]);
        } else {
          this.chartData = getHistoryWithTime(storage["aws"]);
        }
      }.bind(this),
      1000
    );
  }
};
</script>

<style>
</style>

