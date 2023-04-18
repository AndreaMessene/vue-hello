const { createApp } = Vue

createApp({
    data() {
    return {
        //associamo un testo ad una variabile
        message : "Ricarica la pagine per cambiare immagine",
        //associamo L'URL ad una variabile
        urlImg : "https://picsum.photos/200/300",
        altImg : "...ImgRandom..."

        }
    },
    methods: {
        
    }
}).mount('#app')

