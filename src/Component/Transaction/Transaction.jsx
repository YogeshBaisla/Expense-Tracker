import React, { useState } from "react";
import style from "./Transaction.module.css";
import { PiPizzaThin } from "react-icons/pi";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Transaction() {
  const transactions = [
    {
      title: "Samosa",
      category: "Food",
      date: "Sun Mar 24 2024 13:31:00 GMT+0530 (India Standard Time)",
      price: 300,
    },
    {
      title: "Pizza",
      category: "Food",
      date: "Sun Mar 24 2024 13:31:00 GMT+0530 (India Standard Time)",
      price: 300,
    },
    {
      title: "Movie",
      category: "Entertainment",
      date: "Sun Mar 24 2024 13:31:00 GMT+0530 (India Standard Time)",
      price: 150,
    },
    {
      title: "Auto",
      category: "Travel",
      date: "Sun Mar 24 2024 13:31:00 GMT+0530 (India Standard Time)",
      price: 30,
    },
    {
      title: "Cab",
      category: "Travel",
      date: "Sun Mar 24 2024 13:31:00 GMT+0530 (India Standard Time)",
      price: 300,
    },
    {
      title: "Talkshow",
      category: "Entertainment",
      date: "Sun Mar 24 2024 13:31:00 GMT+0530 (India Standard Time)",
      price: 300,
    },
  ];

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

  return (
    <div>
      <h1>Recent Transaction</h1>
      <div className={style.TransactionContainer}>
        <div>
          {currentTransactions.map((entry, index) => (
            <div key={index} >
              <div class={style.RowEntry}>
                <div class={style.ExpenseDetails}>
                <div className={style.ItemIcon}>
                  <PiPizzaThin />
                  </div>
                  <div>
                    <div>{entry.title}</div>
                    <div>{formatDate(entry.date)}</div>
                  </div>
                </div>
                <div className={style.ExpenseAction}>
                  <div className={style.Price}>₹{entry.price}</div>
                  <div className={style.DeleteIcon}>
                    <TiDelete />
                  </div>
                  <div className={style.EditIcon}>
                    <MdOutlineModeEditOutline />
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
