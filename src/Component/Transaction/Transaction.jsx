import React, { useState, useEffect } from "react";
import style from "./Transaction.module.css";
import { PiPizzaThin } from "react-icons/pi";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { CiGift } from "react-icons/ci";
import { BsSuitcase } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Transaction({
  seteditExpense,
  walletBallance,
  setwalletBallance,
  transactions,
  setTransactions
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const handleClickNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTransactions = transactions.slice(startIndex, endIndex);

  const deleteTransaction = (index) => {
    const editingTransaction = transactions[index];
    setwalletBallance((prevBalance) => prevBalance + editingTransaction.price);
    setTransactions((prevTransactions) => {
      const updatedTransactions = [...prevTransactions];
      updatedTransactions.splice(index, 1);
      return updatedTransactions;
    });
  };

  useEffect(() => {
    console.log(transactions);
  }, [transactions]);

  return (
    <div>
      <h1>Recent Transaction</h1>
      <div className={style.TransactionContainer}>
        
        <div>
          {currentTransactions.map((entry, index) => (
            <div key={index}>
              <div className={style.RowEntry}>
                <div className={style.ExpenseDetails}>
                  <div className={style.ItemIcon}>
                    {entry.category === "Food" ? (
                      <PiPizzaThin />
                    ) : entry.category === "Travel" ? (
                      <BsSuitcase />
                    ) : (
                      <CiGift />
                    )}
                  </div>
                  <div>
                    <div>{entry.title}</div>
                    <div>{formatDate(entry.date)}</div>
                  </div>
                </div>
                <div className={style.ExpenseAction}>
                  <div className={style.Price}>₹{entry.price}</div>
                  <div className={style.DeleteIcon}>
                    <TiDelete onClick={() => deleteTransaction(index)} />
                  </div>
                  <div className={style.EditIcon}>
                    <MdOutlineModeEditOutline
                      onClick={() => seteditExpense([true, index])}
                    />
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
        <div className={style.ButtonContainer}>
          <button
            className={style.ArrowButton}
            onClick={handleClickPrev}
            disabled={currentPage === 1}
          >
            <FaArrowLeft />
          </button>
          <div className={style.PageNumber}>{currentPage}</div>
          <button
            className={style.ArrowButton}
            onClick={handleClickNext}
            disabled={currentPage === totalPages}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
