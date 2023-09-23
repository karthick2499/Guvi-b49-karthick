function operation(a,b) {
    try{
        if(b>a){
            throw new Error("B is greater than A");

        }
        const result = a-b;
        console.log("Result:",result);
    }
    catch(err){
        console.log("Error occurred:", err);
    }
}

operation(50,20);




