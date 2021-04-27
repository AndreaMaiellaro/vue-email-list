var app = new Vue({
    el: '#root',
    data: {
        email: '',
        emails: [''],
    },
    methods: {
        pushIntoArray() {
            for (emails.lenght < 10 ) {
                email.push(emails);
            }
        }
        
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