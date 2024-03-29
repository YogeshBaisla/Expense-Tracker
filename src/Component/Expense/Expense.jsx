import React from "react";
import style from "./Expense.module.css"
export default function Expense({setAddExpense,totalExpense,setTransactions}){
    
    return(<div className={style.Container}>
        <div><h1>Expenses : <span className={style.Amount}>₹{totalExpense}</span></h1></div>
        <button className={style.capsuleButton} onClick={()=>{
            setAddExpense([true,-1])
        }}>+Add Expense</button>
        </div>)
}