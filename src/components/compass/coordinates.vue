<template>
  <div class="canvasContainer">
    <canvas class="gaugeCanvas" v-test :angle="angolo" id="canv"></canvas>
  </div>
</template>
<script>
export default {
  props: ["angolo"],
  directives: {
    test: {
      update: function(el) {
        var angle = el.getAttribute("angle");
        var canvas = el,
          size = canvas.width / 2;
        var c = canvas.getContext("2d"),
          pos = size / 2,
          raggio = parseInt(pos * 0.95);
        draw();

        //funzione principale di disegno
        function draw() {
          //pulisco l'area di disegno
          c.clearRect(0, 0, size, size);
          //disegno la circoferenza
          circonferenza();

          //parametri per la visualizzazione degli indicatori
          var smallLine = parseInt(raggio * 0.03),
            smallStart = parseInt(raggio * 0.9),
            bigLine = parseInt(raggio * 0.05),
            bigStart = parseInt(raggio * 0.85);

          //visualizzo gli indicatori
          for (var i = 0; i < 360; i += 10) {
            !(i % 10) &&
              radialLineAtAngle(
                i / 360.0,
                smallLine,
                smallStart,
                raggio,
                "butt",
                "grey"
              );
            !(i % 30) &&
              radialLineAtAngle(
                i / 360.0,
                bigLine,
                bigStart,
                raggio,
                "butt",
                "grey"
              );
          }

          //definisco la dimensione dei valori numerici
          var smallFont = parseInt(raggio * 0.18),
            bigFont = parseInt(raggio * 0.7);
          //visualizzo i quattro indicatori numerici
          info(0, smallFont, pos, parseInt(raggio * 0.36), "black");
          info(
            90,
            smallFont,
            parseInt(raggio * 1.8),
            parseInt(pos + smallFont * 0.4),
            "black"
          );
          info(180, smallFont, pos, parseInt(raggio * 1.9), "black");
          info(
            270,
            smallFont,
            parseInt(raggio * 0.36),
            parseInt(pos + smallFont * 0.4),
            "black"
          );

          //sposta il numero visualizzato
          if (angle < 90 || angle > 270)
            info(angle, bigFont, pos, raggio * 1.55, "red");
          else info(angle, bigFont, pos, raggio * 1.05, "red");

          //visualizzo l'indicatore
          indicatorIn(angle / 360.0);

          //funzione che disegna gli indicatori
          function radialLineAtAngle(
            angleFraction,
            line,
            start,
            end,
            type,
            color
          ) {
            c.save();
            c.translate(pos, pos);
            c.rotate(Math.PI * (2.0 * angleFraction - 0.5));
            c.beginPath();
            c.lineWidth = line;
            c.lineCap = type;
            c.moveTo(start, 0);
            c.lineTo(end, 0);
            c.strokeStyle = color;
            c.stroke();
            c.closePath();
            c.restore();
          }
          //funzione che disegna l'indicatore rosso
          function indicatorIn(angleFraction) {
            var x = parseInt(raggio * 0.3), //posizione freccia interna
              y = parseInt(raggio * 0.13), //larghezza freccia
              z = parseInt(raggio * 0.7); //posizione freccia esterna
            c.save();
            c.translate(pos, pos);
            c.rotate(Math.PI * (2.0 * angleFraction - 0.5));
            c.beginPath();
            c.lineJoin = "miter";
            c.strokeStyle = "round";
            c.fillStyle = "red";
            c.moveTo(z, 0);
            c.lineTo(x, -y);
            c.lineTo(x, y);
            c.lineTo(z, 0);
            c.fill();
            c.stroke();
            c.closePath();
            c.restore();
          }
          //funzione che disegna la circonferenza
          function circonferenza() {
            c.save();
            c.beginPath();
            c.stroke();
            c.fill();
            c.closePath();
            c.beginPath();
            c.arc(pos, pos, raggio, 0, 2 * Math.PI, false);
            c.lineWidth = parseInt(raggio * 0.04);
            c.strokeStyle = "grey";
            c.stroke();
            c.closePath();
            c.restore();
          }
          //funzione che visualizza i numeri
          function info(text, font, posX, posY, color) {
            c.save();
            c.font = font + "px Roboto Mono, serif";
            c.fillStyle = color;
            var tSize = c.measureText(text);
            c.fillText(text, posX - tSize.width / 2, posY);
            c.restore();
          }
        }
      }
    }
  }
};
</script>

<style>
</style>
