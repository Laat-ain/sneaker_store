import React, { useState } from "react";
import styles from "./FAQ.module.css";

const FAQ = ({ data }) => {
  const [expandedState, setExpandedState] = useState(
    Array(data.length).fill(false)
  );

  const toggleAnswer = (index) => {
    setExpandedState((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className={`${styles.container} ${styles.marginTop50}`}>
      <h2>Часто задаваемые вопросы</h2>
      <ul className={styles.questions}>
        {data.map((item, index) => (
          <li className={styles.marginTop20} key={index}>
            <div
              className={styles.question}
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
            </div>
            {expandedState[index] && (
              <div className={styles.answer}>{item.answer}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
