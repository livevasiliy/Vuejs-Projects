<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-localOn:click="clicked" class="btn btn-success">Click me</button>
                <hr>
                <p>Open the console to see the result</p>
                <div 
                class="block" 
                v-localOn:mouseenter="mouseEnter"
                v-localOn:mouseleave="mouseLeave"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  directives: {
    localOn: {
      bind(el, binding, vnode) {
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    clicked() {
      alert("I'm work !");
    },
    mouseEnter() {
      console.log("Mouse entered it's work !");
    },
    mouseLeave() {
      console.log("Mouse leave it's work !");
    }
  }
};
</script>

<style scoped>
.block {
  width: 100px;
  height: 100px;
  background-color: lightgreen;
}
</style>
