<template>
    <div>
        <b-container fluid>
            <b-row align-v="center">
                <b-col class="col-12 col-lg-4 col-md-6 mx-auto">
                    <swiper ref="wind">
                            <swiper-slide>
                                <div class="swiper-slide" data-name="aws[°]">
                                    <h3 class="nameground gaugetext" >APPARENT WIND SPEED</h3>
                                    <gauge  v-bind:angolo="sensorData.aws" id="awa"></gauge>
                                </div>
                            </swiper-slide>
                            <!-- ************************* -->
                            <swiper-slide>
                                <div class="swiper-slide" data-name="AWS[kt]">
                                    <div class="text">
                                        <p class="title gaugetext">APPARENT WIND SPEED</p>
                                        <p class="value aws">{{sensorData.aws}}</p>
                                    </div>
                                </div>
                            </swiper-slide>
                            <!-- ************************* -->
                            <swiper-slide>
                                <div class="swiper-slide" data-name="TWA[°]">
                                    <h3 class="nameground gaugetext" >APPARENT WIND ANGLE</h3>
                                    <wind-gauge v-bind:angolo="sensorData.twa" id="twa" ></wind-gauge>
                                </div>
                            </swiper-slide>
                    </swiper>
                </b-col>
                
                <b-col class="col-12 col-lg-4 col-md-6">
                    <swiper  ref="targetangle">
                            <swiper-slide>
                                <div class="swiper-slide" data-name="TOGP[°]">
                                    <h3 class="nameground gaugetext" >TARGET ANGLE</h3>
                                    <wind-gauge v-bind:angolo="sensorData.togp" id="togp" ></wind-gauge>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-slide" data-name="cog">
                                    <div class="text">
                                        <h3 class="nameground gaugetext" >COURSE OVER GROUND</h3>
                                        <gauge  v-bind:angolo="sensorData.cog" id="cog" ></gauge>
                                    </div>
                                </div>
                            </swiper-slide>
                    </swiper>
                </b-col>
                <b-col class="col-12 col-lg-4 col-md-6">
                    <swiper  ref="speed">
                            <swiper-slide>
                                <div class="swiper-slide" data-name="SOG[kt]">
                                    <div class="text">
                                        <p class="title gaugetext">SPEED OVER GROUND</p>
                                        <p class="value sog">{{sensorData.sog}}</p>
                                    </div>
                                </div>
                            </swiper-slide>
                            <!-- ************************* -->
                            <swiper-slide>
                                <div class="swiper-slide" data-name="SOW[kt]">
                                    <div class="text">
                                        <p class="title gaugetext">SPEED OVER WATER</p>
                                        <p class="value sow">{{sensorData.sow}}</p>
                                    </div>
                                </div>
                            </swiper-slide>
                    </swiper>
                </b-col>
                <b-col class="col-12 col-lg-4 col-md-6">
                    <swiper ref="coordinates">
                          <swiper-slide>
                                    <div class="swiper-slide" data-name="LON">
                                        <div class="text">
                                            <p class="title gaugetext">LONGITUDE</p>
                                            <p class="value lon gaugetext">{{sensorData.lon}}</p>
                                        </div>
                                        <div class="text" data-name="LAT">
                                            <p class="title gaugetext"> LATITUDE </p>
                                            <p class="value lat">{{sensorData.lat}}</p>
                                            </div>
                                    </div>
                                </swiper-slide>
                    </swiper>
                </b-col>
                <b-col class="col-12 col-lg-4 col-md-6">
                    <swiper ref="maghead">
                        <swiper-slide>
                            <div class="swiper-slide" data-name="MH">
                                <h3 class="nameground gaugetext" >MAGNETIC HEADING</h3>
                                <gauge  v-bind:angolo="sensorData.mh" id="mh" ></gauge>
                            </div>
                        </swiper-slide>
                    </swiper>
                </b-col>
                <b-col class="col-12 col-lg-4 col-md-6">
                    <swiper ref="raw">
                        <swiper-slide>
                            <div class="swiper-slide" data-name="VMG">
                                <div class="text">
                                    <p class="title gaugetext">VMG</p>
                                    <p class="value data2">{{sensorData.data2}}</p>
                                </div>
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
  font-size: 5em;
  text-align: center;
}
.gaugetext {
  font-family: "Roboto Mono", monospace;
  font-size: 2em;
  line-height: 1em;
  font-weight: 800;
  text-align: center;
}
.gaugeCanvas {
  width: auto;
  height: 33vh;
  margin-left: 20%;
}
.lon,
.lat {
  font-size: 4em;
}
</style>
 