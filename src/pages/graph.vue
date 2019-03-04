<template>
  <div>
  <b-container fluid>
   <b-row align-v="center"  align-h="center" class="text-center">
    <div v-on:click="showModal(name, $event)" :id="name" v-for=" (value,name) in sensorData" :key="name" class=" col-12 col-sm-6 col-md-4 col-lg-3 sensors p-5">
      <h2 class="sensorName">{{name}}</h2>
      <h1  class="sensorValue">{{value}}</h1>
    </div>
    <b-modal :title="'Grafico un minuto - '+clickedElement" hide-footer lazy size="lg" v-model="modalShow">
      <div class="modal-content" >
        <graph-modal  v-bind:val="sensorDataValue" v-bind:caller="clickedElement"></graph-modal>
      </div>
    </b-modal>
   </b-row>
  </b-container>
  </div>
</template>
<script>
import { sensors } from "../components/mixins/fetch.js";
import graphModal from "../components/graphmodal.vue";
export default {
  mixins: [sensors],

  components: {
    "graph-modal": graphModal
  },

  data() {
    return {
      sensorData: sensors,
      sensorDataValue: "",
      clickedElement: "",
      modalShow: false
    };
  },
  methods: {
    showModal: function(data, event) {
      this.clickedElement = data;
      this.sensorDataValue = this.sensorData.data;
      this.modalShow = !this.modalShow;
    }
  }
};
</script>

<style>
</style>

