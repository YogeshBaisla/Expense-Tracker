import React from "react";
import style from "./HomePage.module.css"
import Wallet from "../Wallet/Wallet";
import Expense from "../Expense/Expense";

export default function HomePage(){
    return(<div className={style.Container}>
        <h1>Expense Tracker</h1>
        <div>
            <div>div 1
                <div><Wallet/></div>
                <div><Expense/></div>
                <div>1.3</div>
            </div>
            <div> div 2
            <div>2.1</div>
            <div>2.2</div>
            </div>

        </div>
        </div>)
}