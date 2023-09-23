function tempo(callback){
    
    console.log("Playing Cricket");

    setTimeout(() =>{
        console.log("Tempo left");
        callback();

    },2000)
}

function afterTempo(){
    console.log("Lets go play Cricket")

}

tempo(afterTempo);