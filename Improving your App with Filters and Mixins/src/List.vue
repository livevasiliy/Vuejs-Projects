<template>
    <div>
        <h2>Mixins</h2>
        <input type="text" v-model="filterText">
        <ul>
            <li v-for="(fruit, index) in filtredFruits" :key="index">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
import { fruitMixin } from "./fruitMixins.js";

export default {
  mixins: [fruitMixin]
};
</script>

<style>
</style>
