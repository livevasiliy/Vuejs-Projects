new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function(){
                alert("Hi !");
            },
            keyValue: function(event){
                this.value = event.target.value;
            }
        }
    });