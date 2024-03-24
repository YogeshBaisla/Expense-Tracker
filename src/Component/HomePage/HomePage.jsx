import React from "react";
import style from "./HomePage.module.css"
import Wallet from "../Wallet/Wallet";
import Expense from "../Expense/Expense";
import ExpenseChart from "../ExpenseChart/ExpenseChart";

export default function HomePage(){
    return(<div className={style.Container}>
        <h1>Expense Tracker</h1>
        <div>
            <div className={style.TopContainer}>
                <div><Wallet/></div>
                <div><Expense/></div>
                <div><ExpenseChart/></div>
            </div>
            <div> div 2
            <div>2.1</div>
            <div>2.2</div>
            </div>

        </div>
        </div>)
}