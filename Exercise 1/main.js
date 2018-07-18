new Vue({
    el: "#exercise",
    data: {
        name: 'Vasiliy Pivovarov',
        age: 21,
        linkPicture: 'https://pp.userapi.com/c846122/v846122322/889ff/5cAF_lSzvFA.jpg'
    },
    methods: {
        randomFloat: function() {
            return Math.random();
        }
    }
});