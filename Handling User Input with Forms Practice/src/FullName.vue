<template>
    <div>
        <!-- First Name field -->
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input 
                type="text" 
                class="form-control"
                id="firstName" 
                placeholder="Input your first name" 
                :value="firstName" 
                @input="nameChanged(true, $event)"
            >
        </div>

        <!-- Last Name field -->
        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input 
                type="text" 
                class="form-control" 
                id="lastName" 
                placeholder="Input your last name" 
                :value="lastName" 
                @input="nameChanged(falsee, $event)"
            >
        </div>
    </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {};
  },
  methods: {
    nameChanged(isFirst, event) {
      let name = "";
      if (isFirst) {
        name = event.target.value + " " + this.lastName;
      } else {
        name = this.lastName + " " + event.target.value;
      }
      this.value = name;
      this.$emit("input", this.value);
    }
  },
  computed: {
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    }
  }
};
</script>

<style>
</style>