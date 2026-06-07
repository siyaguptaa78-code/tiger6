"use client";
import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import { SITE_CONFIG } from "@/config/constants";
import styles from "./InfoSection.module.css";

export default function InfoSection() {
  return (
    <section className={`section-padding ${styles.infoSection}`} id="about">
      <div className="container">
        
        {/* ==========================================
            SECTION 1: WELCOME TO TIGER365
            ========================================== */}
        <div className={`${styles.card} ${styles.welcomeCard}`}>
          <h1 className={styles.sectionTitle}>Welcome to Tiger365</h1>
          <p className={styles.paragraph}>
            Your go-to place for thrilling, safe, secure, and excellent online gaming and sports online gaming is Tiger365. Our platform provides a seamless and captivating gaming experience driven by modern technology, real-time analytics, and a variety of games and online gaming markets, regardless of your level of experience as a sports bettor. We are dedicated to provide the strong security, competitive game ratio, quick wallet service, and attentive customer service that today's players demand as a leading sports online gaming site.
          </p>
        </div>

        {/* ==========================================
            SECTION 2: HOW TO GET A TIGER365 ID?
            ========================================== */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>How to Get a Tiger365 ID?</h2>
          <p className={styles.paragraph}>
            To fully utilise all of the capabilities on the Tiger365 platform, you must first create your own Tiger365 ID.
          </p>
          
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3>Official Website</h3>
              <p>The first step to logging in to the website and starting the registration process is to visit the Tiger365 ID official website.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3>Tiger365 Register</h3>
              <p>Clicking the Tiger365 Register button will bring you to the signup page on the homepage.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3>Fill details</h3>
              <p>To create a unique and validated Tiger365 gaming ID, accurately enter your name, mobile number, and other necessary information.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>4</div>
              <h3>Receive ID</h3>
              <p>You are instantly given an official Tiger365 ID to access the secure player dashboard after completing your registration.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>5</div>
              <h3>Start Exploring</h3>
              <p>To log in and make add balance, use your generated Tiger365 ID and password, which will be used for online gaming.</p>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 3: LOGIN PROCESS
            ========================================== */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Tiger365 Login Process</h2>
          <p className={styles.paragraph}>
            Any user can easily and safely log into Tiger365. Your account will always be accessible in one click.
          </p>
          <p className={styles.paragraph}>
            Logging into your account is very easy once you have created your ID. To view your dashboard immediately, all you need to do is enter your login credentials. This process is entirely safe and is designed to work on both desktops and smartphones.
          </p>
          <div className={styles.btnWrapper}>
            <WhatsAppButton className={styles.ctaBtn}>
              👉 Login / Register Now 👈
            </WhatsAppButton>
          </div>
        </div>

        {/* ==========================================
            SECTION 4: WALLET SERVICE METHODS
            ========================================== */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>What are The Accepted Wallet Service Methods For Tiger365</h2>
          <p className={styles.paragraph}>
            You can easily add balance and begin online gaming right away when you register at Tiger365 because you have access to a variety of wallet service options. We have customized our solutions to meet the demands of Indian users since we recognize how important it is to have quick, safe, and reliable wallet service alternatives.
          </p>
          
          <div className={styles.threeGrid}>
            <div className={styles.subCard}>
              <div className={styles.cardIcon}>💳</div>
              <h3>Credit/Debit Cards</h3>
              <p>Indian customers can add balance straight from their bank accounts because we accept well-known credit and debit cards like Visa and MasterCard. It's a quick and simple way to make a wallet service. After creating an account and adding balance, you can begin online gaming right away.</p>
            </div>
            <div className={styles.subCard}>
              <div className={styles.cardIcon}>📱</div>
              <h3>E-Wallets</h3>
              <p>For individuals who want quick and safe transactions, we provide e-wallet wallet service options including Paytm, PhonePe, Google Pay, and Skrill. These offer smooth add balance and redemption procedures and are widely used in India. Just connect your Tiger365 registration account to your e-wallet.</p>
            </div>
            <div className={styles.subCard}>
              <div className={styles.cardIcon}>🏦</div>
              <h3>Bank Transfers</h3>
              <p>Tiger365 allows bank transfers for both add balance and redemption if you would rather make wallet service straight from your bank account. Although it might take a bit longer than other methods, this is a reliable choice, particularly for big amounts. For a reliable experience, you can select this wallet service method after creating an account.</p>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 5: BENEFITS of TIGER365
            ========================================== */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Benefits of Using Tiger365</h2>
          <p className={styles.paragraph}>
            Tiger365 offers a number of benefits that improve the entire gaming experience. It is a popular option among consumers because of these advantages.
          </p>
          
          <div className={styles.threeGrid}>
            <div className={styles.subCard}>
              <div className={styles.cardIcon}>🎁</div>
              <h3>Attractive Bonuses and Offers</h3>
              <p>Bonuses provide value and boost chances of winning. They maintain users' motivation and interest. A variety of incentives and special offers are available to both new and existing players, improving the entire gaming experience.</p>
            </div>
            <div className={styles.subCard}>
              <div className={styles.cardIcon}>📶</div>
              <h3>Mobile Compatibility</h3>
              <p>Users can play games anywhere, at any time, because of mobile access. It offers convenience and adaptability. Since the platform is completely mobile-friendly, players may enjoy uninterrupted gaming and online gaming while on the go.</p>
            </div>
            <div className={styles.subCard}>
              <div className={styles.cardIcon}>🛡️</div>
              <h3>Transparency and Fair Play</h3>
              <p>Fair gaming provides a reliable experience and promotes trust. On the platform, users can play with assurance. Accurate outcomes and authentic gameplay are guaranteed by Tiger365's transparent online gaming systems and fair gaming methods.</p>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 6: TIPS FOR NEW USERS
            ========================================== */}
        <div className={`${styles.card} ${styles.tipsCard}`}>
          <h2 className={styles.cardTitle}>Tips For New Users</h2>
          <p className={styles.paragraph}>
            Before placing big bets, new users should become familiar with the site. Making better decisions is made easier by smart techniques.
          </p>
          <ul className={styles.tipsList}>
            <li><span>📌</span> Always start with a small adding balance to understand the platform.</li>
            <li><span>📌</span> Explore different online gaming markets before placing large bets.</li>
            <li><span>📌</span> Use secure wallet service methods for transactions.</li>
            <li><span>📌</span> Keep your login credentials private to protect your account.</li>
          </ul>
        </div>

        {/* ==========================================
            SECTION 7: WHY CHOOSE TIGER365?
            ========================================== */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Why Choose Tiger365?</h2>
          <p className={styles.paragraph}>
            For a secure, seamless, and pleasurable experience, selecting the appropriate online gaming platform is crucial. Tiger365 is unique in that it combines innovative technology, strong safety, and user-focused features in one location.
          </p>
          
          <div className={styles.twoColumnGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyHeader}>
                <span className={styles.whyIcon}>🔒</span>
                <h3>Advanced Security and Data Protection</h3>
              </div>
              <p>Tiger365 places a high premium on user safety. The platform guarantees that all financial and personal information is always secure due to its simple encryption methods and safe login procedures. Users can now concentrate on their games without worrying about security threats.</p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyHeader}>
                <span className={styles.whyIcon}>⚡</span>
                <h3>Fast and Reliable Transactions</h3>
              </div>
              <p>Tiger365's speedy wallet service processing system is one of its main benefits. Users receive a seamless financial experience without needless delays since adding balance are made instantly and redemption are managed effectively.</p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyHeader}>
                <span className={styles.whyIcon}>☎️</span>
                <h3>24/7 Customer Support</h3>
              </div>
              <p>Users can receive round-the-clock assistance from a committed customer support team. Help is always available via message, whether you have inquiries about your account, wallet service, or games.</p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyHeader}>
                <span className={styles.whyIcon}>⚖️</span>
                <h3>Commitment to Fair Play</h3>
              </div>
              <p>Fairness and transparency are fundamental to Tiger365's business practices. Every user has an equal chance to win because the platform makes sure that all games and online gaming systems are fair.</p>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 8: ABOUT US CTA
            ========================================== */}
        <div className={styles.aboutCtaBox}>
          <WhatsAppButton className={styles.largeAboutBtn}>
            👉 Learn More About Us / Chat on WhatsApp 👈
          </WhatsAppButton>
        </div>

      </div>
    </section>
  );
}
