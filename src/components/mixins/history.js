   function getStorage() {
     var storage = JSON.parse(sessionStorage.getItem("sensorTimedData"));
     return storage;
   }

   function getDataHistory(sensorValues) {
     var values = [];
     // console.log(sensorValues);
     var splitedStorage = sensorValues.split(",");
     values = splitedStorage;
     return values
   }
   /**
    * Ritorna il lo storico di un sensore compreso di tempo di rilevazione
    */
   function getHistoryWithTime(sensorValues) {
     var values = [];
     var timer = sessionStorage.getItem("time");
     var splitedTimer = timer.split(",");
     var splitedStorage = sensorValues.split(",");
     for (var i = 0; i < sensorValues.length; i++) {
       var ms = parseInt(splitedTimer[i]);
       if (!isNaN(ms)) {
         var d = new Date(ms);
         values[i] = [
           d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds(),
           splitedStorage[i]
         ];
       }
     }
     return values;
   }

   function getLastValue(sensorValues) {
     var splitedStorage = sensorValues.split(",");
     return splitedStorage[splitedStorage.length - 1];
   }

   export {
     getHistoryWithTime,
     getStorage,
     getDataHistory,
     getLastValue
   }
