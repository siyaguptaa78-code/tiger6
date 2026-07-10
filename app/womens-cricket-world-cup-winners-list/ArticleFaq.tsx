"use client";
import React, { useState } from "react";
import styles from "./blog.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

export default function ArticleFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs: FaqItem[] = [
    {
      question: "Who won the Women's Cricket World Cup 2025?",
      answer: "India won the Women's Cricket World Cup 2025. They had beaten South Africa by 52 runs in the final at DY Patil Stadium, Navi Mumbai."
    },
    {
      question: "Who won the Women's T20 World Cup 2026?",
      answer: "Australia won the Women's T20 World Cup 2026, defeating England by 7 wickets in the final at Lord's."
    },
    {
      question: "Which team has won the most Women's World Cups?",
      answer: "Australia has won the most Women's World Cups with 7 titles in both the ODI and T20 versions of the game."
    },
    {
      question: "When was the first Women's Cricket World Cup?",
      answer: "The first ever Women's Cricket World Cup was held in 1973 in England. It was hosted by England who went on to win the tournament."
    },
    {
      question: "Has India ever won a Women's World Cup?",
      answer: "India has won the Women's World Cup in 2025. It was their first-ever win in the tournament, with their previous finishes being 2nd in 2005 and 2017 (ODI) and 2020 (T20)."
    },
    {
      question: "When is the next Women's World Cup?",
      answer: "The next Women's World Cup is set to be held in 2029 with the T20 event being played before it in 2028. The host countries will be decided soon by the ICC."
    }
  ];

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.faqTitle}>Women's World Cup Winners: FAQs</h2>
      <div className={styles.faqWrapper}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ""}`}
          >
            <div className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
              <h3>{faq.question}</h3>
              <span className={styles.icon}>+</span>
            </div>
            <div className={styles.faqAnswer}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
