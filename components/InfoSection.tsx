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
            Your place for exciting and enjoyable online gaming and sports
            online gaming is Tiger365. Our platform delivers an exciting and
            engaging gaming experience fueled by modern technology and real-time
            analytics, as well as a diverse choice of games and online gaming
            markets, to satisfy even the most seasoned sports bettor. We strive
            to provide high-standard security, competitive game ratio, quick
            wallet service, and exceptional customer support, as a leading
            sports online gaming site should.
          </p>
        </div>

        {/* ==========================================
            SECTION 2: HOW TO GET A TIGER365 ID?
            ========================================== */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>How to Get a Tiger365 ID?</h2>
          <p className={styles.paragraph}>
            In order to begin using all of the fantastic features on the
            Tiger365 portal, you will need to create your own Tiger365 ID.
          </p>

          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3>Official Website</h3>
              <p>
                The first step in logging into the website is to go to the
                Tiger365 ID official website.
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3>Tiger365 Register</h3>
              <p>
                By clicking on the Tiger365 Register button, you will be
                directed to the sign-up page on the homepage.
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3>Fill details</h3>
              <p>
                To generate a unique and verified Tiger365 gaming ID, you will
                be required to fill in certain personal information such as your
                name, mobile phone number, etc.
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>4</div>
              <h3>Receive ID</h3>
              <p>
                You will receive an official Tiger365 ID to help you access the
                secure player dashboard upon successful sign-up.
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>5</div>
              <h3>Start Exploring</h3>
              <p>
                By using your generated Tiger365 ID and password, you may log in
                and add balance to start enjoying online gaming.
              </p>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 3: LOGIN PROCESS
            ========================================== */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Tiger365 Login Process</h2>
          <p className={styles.paragraph}>
            Any user can effortlessly log in to Tiger365. Your account will
            always be available at the touch of a button.
          </p>
          <p className={styles.paragraph}>
            It is super easy to login to your account when you have created your
            ID. By simply providing your login details to view your dashboard
            straight away. This process is absolutely secure and is compatible
            with desktop and smartphone devices.
          </p>
          <div className={styles.btnWrapper}>
            <a
              href="https://www.Gabbar247.vip"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              👉 Login / Register Now 👈
            </a>
          </div>
        </div>

        {/* ==========================================
            SECTION 4: WALLET SERVICE METHODS
            ========================================== */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            What are The Accepted Wallet Service Methods For Tiger365
          </h2>
          <p className={styles.paragraph}>
            When you register for Tiger365, you may swiftly add balance to start
            online gaming since you have access to a variety of wallet service
            methods. We have tailored our solutions to meet the needs of Indian
            consumers since we recognize how important it is to provide rapid
            and dependable wallet service options.
          </p>

          <div className={styles.threeGrid}>
            <div className={styles.subCard}>
              <div className={styles.cardIcon}>💳</div>
              <h3>Credit/Debit Cards</h3>
              <p>
                Indian clients may make deposits straight from their bank
                accounts because we accept credit/debit cards. Using popular
                cards such as Visa and MasterCard, you may quickly and easily
                make a wallet service. After registering and adding funds to
                your account, you’ll be able to engage in online gaming right
                away.
              </p>
            </div>
            <div className={styles.subCard}>
              <div className={styles.cardIcon}>📱</div>
              <h3>E-Wallets</h3>
              <p>
                We provide a variety of e-wallet options for those seeking to
                make quick and secure payments. Wallet service options such as
                Paytm, PhonePe, Google Pay, Skrill, and others are available.
                Deposits and withdrawals are simple and quick transactions that
                are widely used in India. Simply attach your Tiger365
                registration account to your e-wallet.
              </p>
            </div>
            <div className={styles.subCard}>
              <div className={styles.cardIcon}>🏦</div>
              <h3>Bank Transfers</h3>
              <p>
                Tiger365 also allows bank transfers for deposits and withdrawals
                if you prefer to make a wallet service from your bank. Even
                though this process may take much longer than the other two
                methods, it is a trustworthy option, especially for large
                transactions. If you want a trustworthy wallet service
                mechanism, you can choose this option after registering on the
                portal.
              </p>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 5: BENEFITS of TIGER365
            ========================================== */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Benefits of Using Tiger365</h2>
          <p className={styles.paragraph}>
            There are several advantages to using Tiger365, making it an
            excellent option for gamers looking to have an exciting experience.
            Because of these benefits, this portal is well-known among clients.
          </p>

          <div className={styles.threeGrid}>
            <div className={styles.subCard}>
              <div className={styles.cardIcon}>🎁</div>
              <h3>Attractive Bonuses and Offers</h3>
              <p>
                These bonuses provide incredible value for money and aid in
                raising the likelihood of winning. In addition to this, they
                assist users in generating excitement and increasing their
                engagement. Users of this portal may take advantage of a wide
                range of rewards and special promotions that are intended to
                improve their overall experience.
              </p>
            </div>
            <div className={styles.subCard}>
              <div className={styles.cardIcon}>📶</div>
              <h3>Mobile Compatibility</h3>
              <p>
                Because of mobile compatibility, users may enjoy playing games
                at their convenience. It works both ways: gamers may have access
                to games wherever and whenever they choose. As a mobile-friendly
                portal, it enables clients to enjoy uninterrupted online gaming
                and games at any time.
              </p>
            </div>
            <div className={styles.subCard}>
              <div className={styles.cardIcon}>🛡️</div>
              <h3>Transparency and Fair Play</h3>
              <p>
                Fair gaming ensures that clients have a positive experience,
                which builds confidence and trust. In this portal, users may
                expect to find fair play because it promises to deliver honest
                results and authentic gameplays through its transparent online
                gaming system.
              </p>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 6: TIPS FOR NEW USERS
            ========================================== */}
        <div className={`${styles.card} ${styles.tipsCard}`}>
          <h2 className={styles.cardTitle}>Tips For New Users</h2>
          <p className={styles.paragraph}>
            Before risking real cash on large wagers, new users should get
            acquainted with the site. Making educated judgments is aided in by
            using some excellent ideas.
          </p>
          <ul className={styles.tipsList}>
            <li>
              <span>📌</span> To start with, new users should only use a smaller
              adding balance to understand how the system works.
            </li>
            <li>
              <span>📌</span> Furthermore, it’s a good idea to explore various
              online gaming markets before investing a large sum of money.
            </li>
            <li>
              <span>📌</span> Finally, new users should only use secure wallet
              service methods and safeguard their login and password from being
              stolen.
            </li>
          </ul>
        </div>

        {/* ==========================================
            SECTION 7: WHY CHOOSE TIGER365?
            ========================================== */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Why Choose Tiger365?</h2>
          <p className={styles.paragraph}>
            When it comes to online gaming, choosing the right portal that
            provides a safe and entertaining experience is critical. Tiger365,
            on the other hand, stands out from the competition because it
            provides state-of-the-art technology, robust security measures, and
            customer-centric features that fulfill user expectations.
          </p>

          <div className={styles.twoColumnGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyHeader}>
                <span className={styles.whyIcon}>🔒</span>
                <h3>Superior Security and Data Encryption</h3>
              </div>
              <p>
                Tiger365 is a well-known site for its customer security and data
                encryption. This platform ensures that all financial and
                personal information is protected at all times since it uses a
                combination of simplified encryption and secure login
                procedures.
              </p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyHeader}>
                <span className={styles.whyIcon}>⚡</span>
                <h3>Quick and Convenient Transactions</h3>
              </div>
              <p>
                One of Tiger365′s key advantages is its quick wallet service
                processes. Users get a fantastic experience because balance
                additions are instantaneous and withdrawals are handled
                efficiently.
              </p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyHeader}>
                <span className={styles.whyIcon}>☎️</span>
                <h3>24/7 Customer Service</h3>
              </div>
              <p>
                The customer service representatives are available around the
                clock to respond to any questions or concerns you may have. When
                it comes to customer support, Tiger365 offers a one-stop-shop
                solution. In addition, users may contact customer service
                through the chat function on the website.
              </p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyHeader}>
                <span className={styles.whyIcon}>⚖️</span>
                <h3>Commitment to Fair Play and Transparency</h3>
              </div>
              <p>
                When it comes to fair use policies, this company goes above and
                beyond to ensure that all users have a positive experience. By
                ensuring that all games and systems are fair, Tiger365 gives
                each player an equal chance to win.
              </p>
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
