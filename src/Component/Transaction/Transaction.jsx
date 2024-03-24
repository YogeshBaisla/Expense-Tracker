import React from "react";
import style from "./Transaction.module.css"
import { PiPizzaThin } from "react-icons/pi";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { TiDelete } from "react-icons/ti";


export default function Transaction(){
    const transactions = [{
     title:"Samosa",
     category :"Food",
     date : "Sun Mar 24 2024 13:31:00 GMT+0530 (India Standard Time)",
     price : 300   
    },
    {
        title:"Piza",
        category :"Food",
        date : "Sun Mar 24 2024 13:31:00 GMT+0530 (India Standard Time)",
        price : 300   
       },
       {
        title:"Movie",
        category :"Entertainement",
        date : "Sun Mar 24 2024 13:31:00 GMT+0530 (India Standard Time)",
        price : 150   
       },
       {
        title:"Auto",
        category :"Travel",
        date : "Sun Mar 24 2024 13:31:00 GMT+0530 (India Standard Time)",
        price : 30   
       },
       {
        title:"Cab",
        category :"Travel",
        date : "Sun Mar 24 2024 13:31:00 GMT+0530 (India Standard Time)",
        price : 300   
       },
       {
        title:"Talkshow",
        category :"Entertainment",
        date : "Sun Mar 24 2024 13:31:00 GMT+0530 (India Standard Time)",
        price : 300   
       },
]
    return(<div>
<h1>Recent Transaction</h1>
        <div>
            {transactions.map((entry,index)=>(<div key={index}><div>
                <div >
                <PiPizzaThin />
                <div>
                <div>{entry.title}</div>
                <div>{entry.date}</div>
                </div>
                </div>
                <div>
                    <div>{entry.price}</div>
                    <div><TiDelete /></div>
                    <div><MdOutlineModeEditOutline /></div>
                </div>
                </div><hr/></div>))}
        </div>
    </div>)
}