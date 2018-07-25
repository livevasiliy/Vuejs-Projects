<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                     <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <!-- FullName component -->
                    <app-full-name v-model="fullName"></app-full-name>
                    
                    <!-- First Name field -->
                    <!-- <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="Input your first name" v-model="firstName">
                    </div> -->

                    <!-- Last Name field -->
                    <!-- <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text" class="form-control" id="lastName" placeholder="Input your last name" v-model="lastName">
                    </div> -->
                    
                    <!-- Email field -->
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Input your last name" :value="mail" @input="mail = $event.target.value">
                    </div>
                    <!-- Password field -->
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Input your last name" :value="password" @input="password = $event.target.value">
                    </div>
                    <!-- Stote in datebase radio buttons -->
                    <div class="form-group">
                        <label>Store in database</label>
                        <div class="radio">
                            <label>
                                <input type="radio" value="Yes" v-model="storeDB"> Yes
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" value="No" v-model="storeDB"> No
                            </label>
                        </div>
                    </div>
                    

                   
                </div>
            </div>
            <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button class="btn btn-primary" @click.prevent="checkSubmitted">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ mail }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeDB }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from "./FullName.vue";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      fullName: "Vasiliy Pivovarov",
      mail: "",
      password: "",
      storeDB: "Yes",
      isSubmitted: false
    };
  },
  methods: {
    checkSubmitted() {
      this.isSubmitted = true;
    }
  },
  components: {
    appFullName: FullName
  }
};
</script>

<style>
</style>