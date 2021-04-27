var app = new Vue({
    el: '#root',
    data: {
        email: '',
        emails: [],
    },
    methods: {        
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            let self = this;

            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(response) {
                const result = response.data;
                console.log(result);
                self.email = result.response;
                console.log(self.email);
                self.emails.push(self.email);
                console.log(self.emails);
            })
        }
    }
})