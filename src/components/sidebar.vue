<template>
    <b-container>
        <a href="#" v-bind:class="{enabled:enabled}" role="button" @click="alternateView" ><i class="material-icons md-48 md-light">{{menu}}</i></a>
        <div id="sidebarMenu" class="col-12 col-md-4 col-lg-4 col-xl-3" >
            <div class="sidebarMenuInner">
              <router-link class="link" v-for="link in links"  :key="link.text" :to="link.url" >{{link.text}}</router-link>
            </div>
        </div>
    </b-container>
</template>
<script>
export default {
  data() {
    return {
      enabled: false,
      menu: "menu",
      links: [
        { text: "Indice", url: "/" },
        { text: "Dati", url: "/index4" },
        { text: "Storico", url: "/history" },
        { text: "Grafici", url: "/graph" }
      ]
    };
  },
  methods: {
    alternateView() {
      this.enabled = !this.enabled;
      if (this.enabled) {
        this.menu = "close";
      } else {
        this.menu = "menu";
      }
    }
  },
  watch: {
    $route() {
      location.reload();
      this.alternateView();
    }
  }
};
</script>
<style>
#sidebarMenu {
  height: 100%;
  position: fixed;
  z-index: 1000;
  right: 0px;
  transform: translateX(101%);
  transition: transform 500ms ease-in-out;
  background: linear-gradient(180deg, #0d6273 0%, #666 100%);
}
.sidebarMenuInner {
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.sidebarMenuInner .link {
  display: list-item;
  list-style: none;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.2em;
  padding: 50px 20px;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: background-color 1s;
}
.sidebarMenuInner .link:hover {
  list-style: none;
  text-decoration: none;
  font-weight: bold;
  cursor: auto;
  background: hsla(190, 80%, 15%, 1);
}
.sidebarMenuInner .link a {
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  transition: font-weight 300ms;
}
.enabled ~ #sidebarMenu {
  transform: translateX(1%);
}
</style>
