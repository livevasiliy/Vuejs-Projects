<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ myName }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset my name</button>
        <button @click="resetFn()">Reset my name</button>
    </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  props: {
    myName: {
      type: String
    },
    resetFn: {
      type: Function
    },
    userAge: {
      type: Number
    }
  },
  methods: {
    resetName: function() {
      this.myName = "Vasiliy";
      this.$emit("nameWasReset", this.myName);
    }
  },
  created: function() {
    eventBus.$on("ageWasEdited", age => {
      this.userAge = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>

