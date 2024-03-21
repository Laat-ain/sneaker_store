import React from "react";
import styles from "./Questions.module.css";
import FAQ from "./FAQ/FAQ";

const faqData = [
  {
    question: "Вопрос 1",
    answer: "Ответ на вопрос 1",
  },
  {
    question: "Вопрос 2",
    answer: "Ответ на вопрос 2",
  },{
    question: "Вопрос 3",
    answer: "Ответ на вопрос 3",
  },{
    question: "Вопрос 4",
    answer: "Ответ на вопрос 4",
  },{
    question: "Вопрос 5",
    answer: "Ответ на вопрос 5",
  },{
    question: "Вопрос 6",
    answer: "Ответ на вопрос 6",
  },{
    question: "Вопрос 7",
    answer: "Ответ на вопрос 7",
  },
];

const Questions = () => {
  return (
    <>
        <FAQ data={faqData} />
    </>
  );
};

export default Questions;
