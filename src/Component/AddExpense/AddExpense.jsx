import React from "react";
import style from "./AddExpense.module.css";
import { useEffect } from "react";
import { useSnackbar } from 'notistack'
export default function AddExpense({addExpense, setAddExpense, heading, walletBallance, setwalletBallance, transactions, setTransactions}){
    const { enqueueSnackbar } = useSnackbar();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        if (addExpense[1] === -1) {
            // Handle adding new transaction
            const newTransaction = {
                title: e.target[0].value,
                category: e.target[2].value,
                date: e.target[3].value,
                price: parseInt(e.target[1].value)
            };
    
            if (parseInt(newTransaction.price) > walletBallance) {
                enqueueSnackbar('Please add sufficient balance in wallet', { variant: 'error' });
                return;
            }
            if (newTransaction.price < 0 || isNaN(newTransaction.price)) {
                enqueueSnackbar('Please enter a valid price', { variant: 'error' });
                return;
            }
    
            setwalletBallance(prevBalance => prevBalance - newTransaction.price);
            setTransactions(prevTransactions => [...prevTransactions, newTransaction]);
            console.log(transactions);
        } else {
            // Handle editing existing transaction
            const index = addExpense[1];
            const editingTransaction = transactions[index];
    
            // Update the wallet balance
            const newPrice = parseInt(e.target[1].value);
            const oldPrice = parseInt(editingTransaction.price);
            const priceDifference = newPrice - oldPrice;
            setwalletBallance(prevBalance => prevBalance + priceDifference);
    
            // Update the transaction details
            const updatedTransaction = {
                title: e.target[0].value,
                category: e.target[2].value,
                date: e.target[3].value,
                price: parseInt(e.target[1].value)
            };
    
            // Create a new transactions array with the updated transaction
            const updatedTransactions = [...transactions];
            updatedTransactions[index] = updatedTransaction;
    
            // Update the transactions state
            setTransactions(updatedTransactions);
        }
        setAddExpense(false)
    };
    useEffect(() => {
        const selectElement = document.getElementById("categorySelect");
        selectElement.addEventListener("change", function () {
          if (this.value !== "") {
            this.removeAttribute("required");
          } else {
            this.setAttribute("required", "required");
          }
        });
      }, []);
    return(
    <div className={style.POP}>
        <div className={style.Expense} onSubmit={(e)=>{handleSubmit(e)}}>
            <h1>{heading}</h1>
            <form className={style.Form}>
            <input className={style.Amount} type="text" placeholder="Title" required/>
                <input className={style.Amount} type="number" placeholder="Price" required/>
                <select className={style.Amount} id="categorySelect">
                <option value="" disabled defaultValue>Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Entertainment">Entertainment</option>
                </select>

                <input className={style.Amount} type="date" placeholder="dd/mm/yyyy" required/>
                <button className={style.submitButton} type="submit">Add Expense</button>
                <button className={style.cancelButton} type="button" onClick={()=>{
        setAddExpense(false)}}>Cancel</button>
            </form>
        </div>
    </div>
)}