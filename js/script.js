var app = new Vue({
    el: '#root',
    data: {
        email: '',
    },
    methods: {
    },
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(response) {
                console.log(response);
            })
    }
})