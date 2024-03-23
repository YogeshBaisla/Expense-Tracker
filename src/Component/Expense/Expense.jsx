import React from "react";
import style from "./Expense.module.css"
export default function Expense(){
    return(<div className={style.Container}>
        <div><h1>Expenses : <span className={style.Amount}>₹{500}</span></h1></div>
        <button className={style.capsuleButton}>+Add Expense</button>
        </div>)
}