function asyncTask1() {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Task 1 completed");

        },1000);

    });
}


function asyncTask2() {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Task 2 completed");

        },1000);

    });
}


function asyncTask3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 3 completed");
        },1000);
    });
}


Promise.all([asyncTask1(),asyncTask2(),asyncTask3()])
.then((val) => {
    console.log(val);
    console.log("All tasks are Completed");
})
.catch((err) => {
    console.log("Error: ",err);
});