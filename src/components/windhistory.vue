<template>
    <div id="contenuto">
        <canvas id="history"> </canvas>
    </div>
</template>

<script>
import { getLastValue, getStorage } from "../components/mixins/history.js";
import { sensors } from "../components/mixins/fetch.js";
export default {
  data() {
    return {
      hisV: []
    };
  },
  created: function() {
    var storage = getStorage();
    setInterval(
      function() {
        storage = getStorage();
        var mh = getLastValue(storage["mh"]);
        var twa = getLastValue(storage["twa"]);

        // vento reale +mag_heading
        var mh_twa = parseFloat(twa) + parseFloat(mh);
        if (mh_twa > 360.0) mh_twa = mh_twa - 360.0;
        else if (mh_twa < 0) mh_twa = 360.0 - mh_twa;
        this.hisV.push(mh_twa);
      }.bind(this),
      1000
    );
  },
  mounted: function() {
    this.showHistory();
  },
  methods: {
    showHistory: function() {
      var canvas = document.getElementById("history"),
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
        stepw = w / 360;

      c.beginPath();
      //disegno la linea verticale a meta' area di disegno
      c.moveTo(parseInt(w * 0.5), 0);
      c.lineTo(parseInt(w * 0.5), h);
      c.lineWidth = 4;
      c.strokeStyle = "red";
      c.stroke();
      c.closePath();

      c.beginPath();
      //disegno la linea verticale a meta' area di disegno
      c.moveTo(parseInt(w * 0.25), 0);
      c.lineTo(parseInt(w * 0.25), h);
      c.lineWidth = 1;
      c.strokeStyle = "red";
      c.stroke();
      c.closePath();

      c.beginPath();
      //disegno la linea verticale a meta' area di disegno
      c.moveTo(parseInt(w * 0.75), 0);
      c.lineTo(parseInt(w * 0.75), h);
      c.lineWidth = 1;
      c.strokeStyle = "red";
      c.stroke();
      c.closePath();

      c.font = "19px Arial";
      c.fillText(0, w * 0.5, 3 * steph);
      c.fillText(180, w * 0.87, 3 * steph);
      c.fillText(-180, w * 0.01, 3 * steph);

      c.beginPath();

      var hisV = this.hisV;
      //disegno lo storico del vento
      var last = -1;

      for (var i = 0; i < hisV.length; i++) {
        // da usare per il vento reale compreso [-180 +180]
        c.lineTo(hisV[i] * stepw + 180.0 * stepw, i * steph);

        // da usare per cog compreso [0 360]
        c.lineTo(hisV[i] * stepw, i * steph);

        if (last != hisV[i]) {
          c.font = "28px Arial";
          //.fillText(hisV[i],(hisV[i] * stepw), (i * steph));
        }
        last = hisV[i];
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
  width: 95vw;
  height: 83vh;
}
canvas {
  border: 1px black solid;
}
</style>

