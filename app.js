// console.log('Hello, vue')

const app = Vue.createApp({
    data() {
        return {
            title: 'Hello World',
            author: 'BoomDevs',
            age: 10
        }
    },
    methods: {
        changeTitle() {
            this.title = 'Words of Randiance'
        }
    },
})

app.mount('#test')