<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponents = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponents = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponents = 'appRed'">Load Red Template</button>
                <hr>
                <keep-alive>
                    <component :is="selectedComponents">
                        <h1 slot="title">{{ getContent.title }}</h1>
                        <p slot="text">{{ getContent.text }}</p>
                    </component>
                </keep-alive>

            </div>
        </div>
    </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data: function() {
    return {
      selectedComponents: "appBlue",
      content: [
        {
          title: "Blue component",
          text: "Successful loading blue components"
        },
        {
          title: "Green component",
          text: "Successful loading green components"
        },
        {
          title: "Red component",
          text: "Successful loading red components"
        }
      ]
    };
  },
  computed: {
    getContent: function() {
      var data = {};
      switch (this.selectedComponents) {
        case "appBlue":
          data = this.content[0];
          break;
        case "appGreen":
          data = this.content[1];
          break;
        case "appRed":
          data = this.content[2];
          break;
      }
      return data;
    }
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
};
</script>

<style>
</style>