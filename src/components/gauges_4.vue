<template>
    <div>
        <b-container fluid>
            <b-row>
                <b-col class="col-lg-6 ">
                    <swiper>
                        <swiper-slide>
                            <div class="swiper-slide" data-name="aws[°]">
                                 <div class="text">
                                    <h3 class="nameground gaugetext" >APPARENT WIND SPEED</h3>
                                    <gauge  v-bind:angolo="sensorData.aws" id="awa"></gauge>
                                 </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide>
                            <div class="swiper-slide" data-name="AWS[kt]">
                                <div class="text">
                                    <p class="title gaugetext">APPARENT WIND SPEED</p>
                                    <p class="value aws">{{sensorData.aws}}</p>
                                 </div>
                            </div>
                        </swiper-slide>   

                          <swiper-slide>
                            <div class="swiper-slide" data-name="AWS[kt]">
                                <div class="text">
                                    <p class="title gaugetext">SPEED OVER WATER</p>
                                    <p class="value aws">{{sensorData.sow}}</p>
                                 </div>
                            </div>
                        </swiper-slide> 
                    
                    </swiper>
                </b-col>
                <b-col class="col-lg-6 ">
                    <swiper>
                        <swiper-slide>
                                <div class="swiper-slide" data-name="TOGP[°]">
                                    <div class="text">
                                    <h3 class="nameground gaugetext" >TARGET ANGLE</h3>
                                    <wind-gauge v-bind:angolo="sensorData.togp" id="togp" ></wind-gauge>
                                    </div>
                                </div>
                        </swiper-slide>

                        <swiper-slide>
                            <div class="swiper-slide" data-name="AWS[kt]">
                                <div class="text">
                                    <p class="title gaugetext">SPEED OVER GROUND</p>
                                    <p class="value aws">{{sensorData.sog}}</p>
                                 </div>
                            </div>
                        </swiper-slide>   

                          <swiper-slide>
                            <div class="swiper-slide" data-name="AWS[kt]">
                                <div class="text">
                                    <p class="title gaugetext">TARGET SPEED</p>
                                    <p class="value aws">{{sensorData.sogp}}</p>
                                 </div>
                            </div>
                        </swiper-slide> 
                    </swiper>
                </b-col>
            </b-row>
             <b-row >
                <b-col class="col-lg-6 "> 
                    <swiper>
                        <swiper-slide>
                            <div class="swiper-slide" data-name="cog">
                                <div class="text">
                                    <h3 class="nameground gaugetext">COURSE OVER GROUND</h3>
                                    <gauge  v-bind:angolo="sensorData.cog" id="cog" ></gauge>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                                <div class="text" data-name="LAT">
                                    <p class="title gaugetext"> LATITUDE </p>
                                    <p class="value lat">{{sensorData.lat}}</p>
                                 </div>
                        </swiper-slide>

                        <swiper-slide>
                            <div class="swiper-slide" data-name="TWA[°]">
                                <div class="text">
                                    <h3 class="nameground gaugetext" >TRUE WIND ANGLE</h3>
                                    <wind-gauge v-bind:angolo="sensorData.twa" id="twa" ></wind-gauge>
                                </div>
                            </div>
                        </swiper-slide>
                         <swiper-slide>
                            <div class="swiper-slide" data-name="VMG">
                                <div class="text">
                                    <p class="title gaugetext">VMG</p>
                                    <p class="value data2">{{sensorData.data2}}</p>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </b-col>
                  <b-col class="col-lg-6 ">
                    <swiper>
                    <swiper-slide>
                            <div class="swiper-slide" data-name="MH">
                                <div class="text">
                                    <h3 class="nameground gaugetext" >MAGNETIC HEADING</h3>
                                    <gauge  v-bind:angolo="sensorData.mh" id="mh" ></gauge>
                                </div>
                            </div>
                    </swiper-slide>

                     <swiper-slide>
                                <div class="swiper-slide" data-name="SOG[kt]">
                                    <div class="text">
                                        <p class="title gaugetext"> TRUE WIND SPEED</p>
                                        <p class="value sog">{{sensorData.tws}}</p>
                                    </div>
                                </div>
                    </swiper-slide>
                    <swiper-slide>
                                <div class="text" data-name="LON">
                                    <p class="title gaugetext"> LONGITUDE </p>
                                    <p class="value lat">{{sensorData.lon}}</p>
                                 </div>
                        </swiper-slide>
                          <swiper-slide>
                            <div class="swiper-slide" data-name="DVPP">
                                <div class="text">
                                    <p class="title gaugetext">DELTA VPP [%]</p>
                                    <p class="value data1">{{sensorData.data1}}</p>
                                </div>
                            </div>
                        </swiper-slide>
                        </swiper>
                </b-col>
            </b-row>
        </b-container>
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
      sensorData: sensors
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
.value {
  font-family: "Roboto Mono", monospace;
  font-size: calc(5vw + 5vh + 2vmin);
  font-weight: bold;
}
.swiper-slide {
  height: 200%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: relative;
}
.gaugetext {
  font-family: "Roboto Mono", monospace;
  font-size: 2.2em;
  text-align: left;
  line-height: 2em;
  font-weight: 800;
}
.gaugeCanvas {
  width: auto;
  height: 33vh;
}
</style>
 