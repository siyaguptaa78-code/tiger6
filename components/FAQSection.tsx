"use client";
import styles from "./FAQSection.module.css";

export default function FAQSection() {
  return (
    <section className={`section-padding ${styles.section}`} id="faq">
      <div className="container">
        <h2 className="section-title text-center">
          Frequently Asked Questions
        </h2>
        
        <div className={styles.faqWrapper}>
          <p style={{ textAlign: "center", color: "var(--text-secondary)", lineHeight: "1.6" }}>
            Tiger365 makes it simple to register an account. All you have to do is log into the website, click the register button, and enter your name and mobile number to get your ID instantly.
          </p>
        </div>
      </div>
    </section>
  );
}
