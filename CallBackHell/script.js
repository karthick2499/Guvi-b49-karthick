var countdown=document.createElement("div");
countdown.className="main";

setTimeout(()=>{
    countdown.innerText="10";
},1000);
setTimeout(()=>{
    countdown.innerText="9"; 
},2000);  
setTimeout(()=>{
    countdown.innerText="8"; 
},3000);  
setTimeout(()=>{
    countdown.innerText="7"; 
},4000);  
setTimeout(()=>{
    countdown.innerText="6"; 
},5000);  
setTimeout(()=>{
    countdown.innerText="5"; 
},6000);  
setTimeout(()=>{
    countdown.innerText="4"; 
},7000); 
setTimeout(()=>{
    countdown.innerText="3"; 
},8000); 
setTimeout(()=>{
    countdown.innerText="2"; 
},9000); 
setTimeout(()=>{
    countdown.innerText="1"; 
},10_000); 
setTimeout(()=>{
    countdown.innerText="Happy Independence Day";
},11_000);
document.body.appendChild(countdown);