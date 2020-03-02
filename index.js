Vue.component('compound', {
        template: `
        <div class="container">
                <span> Compound Interest Calculator </span>
                 <br>
                 <br>
                 <br>
                 <input v-model="principal" type="tel" placeholder="Principal"> 
                 <br>
                <br>
                <input v-model="time"type="tel" placeholder="Time">
                <br>
                <br>
                <input v-model="number" type="tel" placeholder="number">
                <br >
                <br>
                <input v-model="rate" type="tel" placeholder="Rate">
                <br>
                <p v-show="this.results"> Your compound interest is ₦{{ results }} </p>
                <div>
                <button v-show="principal || rate || number || time" v-on:click="reset">Reset</button>
                </div>
        </div>`,

        data() {
                return {
                        principal: '',
                        rate: '',
                        number: '',
                        time: ''
                }
        },

        methods: {
                reset() {
                        this.principal = null,
                                this.rate = null,
                                this.number = null,
                                this.time = null
                }
        },

        computed: {
                results: function () {
                        return this.principal * (1 + this.rate / this.number)^ this.number * this.time;
                },
        }
});

var app = new Vue({
        el: "#app",
});