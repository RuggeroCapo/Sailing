const STORAGENAME = "sensorTimedData";

var timedSensors = {},
  timer = [], //gestisce i tick di ogni fech dei dati dal server
  timeValue = 0;
const DURATION = 10;
export var sensors = {
  data() {
    return {
      sensorData: [], //valori ottenuti dai sensori
    }
  },
  methods: {
    /**
     * Carica i dati dal server e li salva nella variabile sensorData
     */
    loadData: function () {
      this.$http.get("src/server/test.json").then(function (data) {
        this.sensorData = data.body;
      });
    },
    /**
     * Salvo in session storage i dati degli ultimi 60sec
     */
    saveData: function () {
      //rimuovo il primo elemento aggiunto al raggiungimento di 60sec
      if (timeValue > DURATION) {
        for (var value in timedSensors) {
          timedSensors[value] = timedSensors[value].slice(timedSensors[value].indexOf(",") + 1); //Rimuovo il primo elemento
        }
        timer.shift();
      }
      sessionStorage.setItem(STORAGENAME, JSON.stringify(timedSensors));
      sessionStorage.setItem("time", timer);
    },
    /**
     * Unisco l'ulitimo json ottenuto ai dati storici
     * @param {Object} newData dati dell'ultimo download
     */
    mergeData: function (newData) {
      if (timeValue === 1) {
        timedSensors = this.sensorData;
      } else {
        for (var value in newData) {
          timedSensors[value] += "," + newData[value];
        }
      }
    }
  },
  created: function () {
    this.loadData();
    timer = [new Date().getTime()];
    Object.assign(timedSensors, this.sensorData);
    //Scarico i dati nuovi
    setInterval(
      function () {
        timeValue = timeValue + 1;
        this.loadData();
        this.mergeData(this.sensorData);
        timer.push(new Date().getTime());
        this.saveData();
      }.bind(this),
      1000
    );
  }
}
