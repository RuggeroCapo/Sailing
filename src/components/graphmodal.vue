<template>
<div>
    <line-chart :data="chartData" :curve="false" height="60vh" xtitle= "Time" ytitle= "Value"></line-chart>
    <span class="modalInfo">
      <h4>{{sensor}}</h4>
      <h1>{{currentValue}}</h1>
    </span>
</div>
</template>
<script>
const STORAGENAME = "sensorTimedData";

import { sensors } from "./mixins/fetch";
import {
  getHistoryWithTime,
  getStorage,
  getLastValue
} from "./mixins/history.js";
import { sensorName } from "../names.js";
export default {
  props: ["caller"],
  data() {
    return {
      sensor: "",
      chartData: [[]],
      currentValue: ""
    };
  },
  created: function() {
    var storage = getStorage();
    setInterval(
      function() {
        storage = getStorage();
        this.chartData = getHistoryWithTime(storage[this.caller]);
        this.currentValue = getLastValue(storage[this.caller]);
      }.bind(this),
      1000
    );
    this.sensor = sensorName[this.caller];
  }
};
</script>
<style>
.modalInfo h1 {
  font-family: "Roboto Mono", monospace;
  font-size: 4em;
}
</style>
