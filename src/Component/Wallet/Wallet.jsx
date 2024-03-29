import React from "react";
import style from "./Wallet.module.css"
import { useState } from "react";
import AddBallance from "../AddBallance/AddBallance";
export default function Wallet({walletBallance,setAddBallance}){
    return(<div className={style.Container}>
        <div><h1>Wallet Balance : <span className={style.Amount}>₹{walletBallance}</span></h1></div>
        <button className={style.capsuleButton} onClick={()=>{
            setAddBallance(true)
        }}>+Add Income</button>
        </div>)
}