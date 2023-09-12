import React, { createContext, useState } from 'react'
import datas from './product.json'

const Common = createContext();

function Commondata({children}){
    const[data, setdata] = useState(datas.products);
    const[total, settotal] = useState(new Array(data.length).fill(0));
    const[count, setcount] = useState(new Array(data.length).fill(0));
    const[final,setfinal] = useState(0);
    

    const add = (id) => {
        data.map((list,index) => {
            if (id === list.id) {
                setcount(count.map((num,ind)=>ind===index? num+1: num))
                settotal(total.map((val,indexval)=>indexval === index? val+list.price:val)); 
                setfinal(total.reduce((acc,current)=>{return acc+current},list.price))  
                
            };
        });
    }


    const minus = (id)=>{
        data.map((list,index)=>{
            if(list.id === id){
                setcount(count.map((num,ind)=>ind === index?(num>0?num-1:num):num));
                settotal(total.map((item,val)=>val === index?(item>0?item-list.price:item):item));
                let a =0;
                for(let i= 0; i<total.length;i++){
                    a += total[i]
                }
                setfinal(a)
               
              
            };
        });
    };


    
    return(
        <Common.Provider value = {{data, add, total, minus, count, final}}>
            {children}
        </Common.Provider>
    )
}

export {Common, Commondata}