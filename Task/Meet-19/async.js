function getToy(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const toy ="Teddy";
            reject(toy);
        },4000);

    });
}

async function playToy(){
    console.log("Lets play with cars and blocks");
    try{
        const toy = await getToy();
        console.log("Yay! I got my", toy);
        console.log("Now i can continue playing with other toys!!");
    } catch(err){
        console.log("Oops Wrong", err);
    }

}

playToy();
