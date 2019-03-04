<template>
	<header>
    <b-container fluid>
      <b-row align-v="center">
          <b-col cols="3" md="1">
            <i @click="manageFullScreen" class="material-icons md-48 md-light">{{fullscreen}}</i>
          </b-col>

          <b-col cols="5" sm="8" md="9" xl="10" class="md-light">
            <h4> <b>{{time}} </b></h4>
          </b-col>
        <b-col cols="1">
              <sidebar></sidebar>
        </b-col>
      </b-row>
    </b-container>
	</header>
</template>

<script>
import sidebar from "./sidebar.vue";
export default {
  name: "app",
  data() {
    return {
      time: "",
      fullscreen: "fullscreen"
    };
  },
  methods: {
    manageFullScreen: function() {
      if (
        !document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
        this.fullscreen = "fullscreen_exit";
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
        this.fullscreen = "fullscreen";
      }
    }
  },
  created: function() {
    setInterval(() => {
      var now = new Date(),
        hh = now.getHours(),
        mm = now.getMinutes(),
        ss = now.getSeconds();
      this.time =
        (hh < 10 ? "0" + hh : hh) +
        ":" +
        (mm < 10 ? "0" + mm : mm) +
        ":" +
        (ss < 10 ? "0" + ss : ss);
    }, 1000);
  },
  components: {
    sidebar: sidebar
  }
};
</script>

<style>
header {
  background: hsla(190, 80%, 25%, 1);
}
.material-icons.md-48 {
  font-size: 60px;
}
.md-light {
  color: rgba(255, 255, 255, 1);
}
body {
  height: 100%;
}
</style>

