<template>
    <div id="contenuto">
        <canvas id="graph"> </canvas>
    </div>
</template>

<script>
import { getLastValue, getStorage } from "../components/mixins/history.js";
import { sensors } from "../components/mixins/fetch.js";
export default {
  data() {
    return {
      graph_x: []
    };
  },
  created: function() {
    var storage = getStorage();
    setInterval(
      function() {
        storage = getStorage();
        var graphx = getLastValue(storage["graphx"]);
        this.graph_x.push(graphx);
        this.showGraph();
      }.bind(this),
      1000
    );
  },
  mounted: function() {
    this.showGraph();
  },
  methods: {
    showGraph: function() {
      var canvas = document.getElementById("graph"),
        c = canvas.getContext("2d"),
        h = document.getElementById("contenuto").clientHeight,
        w = document.getElementById("contenuto").clientWidth / 2 - 4;
      canvas.setAttribute("width", w);
      canvas.setAttribute("height", h);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      //pulisco l'area di disegno
      c.clearRect(0, 0, w, h);

      var steph = h / 100,
        stepw = w / 10;

      c.font = "19px Arial";
      c.fillText(5, w * 0.5, 3 * steph);
      c.fillText(10, w * 0.94, 3 * steph);
      c.fillText(0, w * 0.01, 3 * steph);

      c.beginPath();
      //disegno la linea verticale a meta' area di disegno
      c.moveTo(parseInt(w / 2), 0);
      c.lineTo(parseInt(w / 2), h);
      c.lineWidth = 1;
      c.strokeStyle = "red";
      c.stroke();
      c.closePath();

      var graph_x = this.graph_x;
      //disegno le linee
      c.beginPath();
      for (var i = 0; i < graph_x.length; i++) {
        c.lineTo(graph_x[i] * stepw, i * steph);
      }
      c.lineWidth = 2;
      c.strokeStyle = "black";
      c.stroke();
      c.closePath();
    }
  }
};
</script>

<style scoped>
#contenuto {
  height: 83vh;
}
canvas {
  border: 1px black solid;
}
</style>

