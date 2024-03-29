import React from "react";
import style from "./AddBallance.module.css"
import { useSnackbar } from 'notistack'

export default function AddBallance({setAddBallance,walletBallance,setwalletBallance}){
    const { enqueueSnackbar } = useSnackbar();
    const handleSubmit = (e) => {
        e.preventDefault();

        const amount = parseInt(e.target[0].value);
        if (amount < 0) {
            enqueueSnackbar('Please enter a positive value.', { variant: 'error' });
            return;
        }

        localStorage.setItem("walletBallance", walletBallance + amount);
        setwalletBallance(walletBallance + amount);
        setAddBallance(false)
    }
    return(
        <div className={style.POP}>
            <div className={style.Ballance}>
                <h1>Add Balance</h1>
                <form className={style.Form} onSubmit={(e)=>{handleSubmit(e)}}>
                    <input className={style.Amount} type="number" placeholder="Income Amount" required/>
                    <button className={style.submitButton} type="submit">Add Balance</button>
                    <button className={style.cancelButton} type="button" onClick={()=>{
            setAddBallance(false)}}>Cancel</button>
                </form>
            </div>
        </div>
    )
}