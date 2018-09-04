<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase() | to-lowercase() }}</p>
                <hr>
                <button @click="fruits.push('Orange')">Add new item</button>
                <input type="text" v-model="filterText">
                <ul>
                    <li v-for="(fruit, index) in filtredFruits" :key="index">{{ fruit }}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
import List from "./List.vue";
import { fruitMixin } from "./fruitMixins.js";

export default {
  data() {
    return {
      text: "Hello"
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  mixins: [fruitMixin],
  components: {
    appList: List
  }
};
</script>

<style>
</style>
