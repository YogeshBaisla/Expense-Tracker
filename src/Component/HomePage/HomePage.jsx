import React from "react";
import style from "./HomePage.module.css"
import Wallet from "../Wallet/Wallet";
import Expense from "../Expense/Expense";
import ExpenseChart from "../ExpenseChart/ExpenseChart";
import Transaction from "../Transaction/Transaction";
import TopExpense from "../TopExpense/TopExpense";

export default function HomePage(){
    return(<div className={style.Container}>
        <h1>Expense Tracker</h1>
        <div>
            <div className={style.TopContainer}>
                <div><Wallet/></div>
                <div><Expense/></div>
                <div><ExpenseChart/></div>
            </div>
            <div className={style.TransactionExpenseContainer}>
            <div><Transaction/></div>
            <div>
                <h1>Top Expenses</h1>
                <div class={style.TopExpenseContainer}><TopExpense/></div></div>
            </div>

        </div>
        </div>)
}