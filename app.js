const app = Vue.createApp({
    // template:'<h1>Hello {{name}}</h1>',
    data() {
        return {
            firstName:'Faiz',
            lastName:'Dae',
            email:'faizahmad.daiee@gmail.com',
            gender:'male',
            picture:'https://randomuser.me/api/portraits/men/90.jpg',
            status:'loaded'
        }
    },

    methods: {
       async getUser(){

            this.firstName = 'loading...';
            this.status = 'loading';
            this.lastName = '';
            this.email = 'loading...';
            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json();

            // console.log(results);

            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;
            this.status = 'loaded';

        }
    },
})


app.mount('#app');
