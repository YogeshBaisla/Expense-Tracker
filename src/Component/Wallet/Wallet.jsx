import React from "react";
import style from "./Wallet.module.css"
export default function Wallet(){
    return(<div className={style.Container}>
        <div><h1>Wallet Balance : <span className={style.Amount}>₹{4500}</span></h1></div>
        <button className={style.capsuleButton} >+Add Income</button>
        {/* <div className={style.POP}>POP</div> */}
        </div>)
}