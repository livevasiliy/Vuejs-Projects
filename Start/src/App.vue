<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-list-servers></app-list-servers>
            <app-detail-server></app-detail-server>
        </div>
        <hr>
        <div class="row">
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
import Header from "./Header.vue";
import ListServers from "./ListServers.vue";
import DetailServer from "./DetailServer.vue";
import Footer from "./Footer.vue";
export default {
  components: {
    "app-header": Header,
    "app-list-servers": ListServers,
    "app-detail-server": DetailServer,
    "app-footer": Footer
  }
};
</script>

<style>
</style>
