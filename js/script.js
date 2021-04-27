var app = new Vue({
    el: '#root',
    data: {
        email: '',
    },
    methods: {
    },
    mounted() {
        let self = this;

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(response) {
                const result = response.data;
                console.log(result);
                self.email = result.response;
            })
    }
})