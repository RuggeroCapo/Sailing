<template>
  <b-container fluid>
    <b-row>
      <b-col cols="6">
      <p class="titolo">STORICO VENTO</p>
      </b-col>
      <b-col cols="6">
      <p class="titolo">STORICO GRAFO</p>
      </b-col>
    </b-row>  
    <b-row>
      <b-col cols="6">
        <windhistory></windhistory>
         </b-col>
         <b-col cols="6">
       <graphhistory></graphhistory>
        </b-col>
    </b-row>  
  </b-container>
</template>

<script>
import windhistory from "../components/windhistory";
import graphhistory from "../components/graphhistory";
export default {
  components: {
    windhistory: windhistory,
    graphhistory: graphhistory
  },
  methods: {}
};
</script>

<style>
.titolo {
  font-size: 3vh;
  text-align: center;
}
</style>

