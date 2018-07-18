new Vue({
        el: '#exercise',
        data: {
            value: 0,
            duraction: 5000
        },
        computed: {  
            result(){
                return this.value < 37 ? 'not there yet' : 'done';
            }
        },
        watch: {
            result() {
                if (this.value >=37) {
                    var vm = this;
                    var timer = setTimeout(() => {
                        vm.value = 0;
                        clearTimeout(timer);
                    }, this.duraction);
                }
            }
        }
    });