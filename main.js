"use strict"
const {createApp}=Vue;
createApp({
    data(){
        return{
            message: "Hello World",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNlsLSkmfITBapa7_DLvBCIhy872SeX0Eng&usqp=CAU",
            imgName : "earth"
        }
    }
}).mount("#app");