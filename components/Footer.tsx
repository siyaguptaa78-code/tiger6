import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function Footer() {
  const getWhatsAppLink = (section: string) => {
    const text = encodeURIComponent(`Hi! I want to get details regarding ${section} on Tiger365.`);
    return `${SITE_CONFIG.whatsappLink}?text=${text}`;
  };

  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        
        {/* ==========================================
            DISCLAIMER SECTION
            ========================================== */}
        <div className={styles.disclaimerBox}>
          <h4 className={styles.disclaimerTitle}>DISCLAIMER</h4>
          <p className={styles.disclaimerText}>
            Tiger365 is an exciting fantasy sports platform. However, fantasy sports can be addictive and risky, so we encourage you to play responsibly. Only users who are 18 years or older and can legally participate are allowed to use Tiger365. Please note that we do not serve users from Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, Telangana, or Tamil Nadu, as their laws prohibit participation. All Tiger365 contests are subject to the site’s terms and conditions. Therefore, we strongly recommend that users review these terms before entering any contests.
          </p>
        </div>

        <div className={styles.footerDivider}></div>

        {/* ==========================================
            MAIN FOOTER CONTENT
            ========================================== */}
        <div className={styles.footerGrid}>
          
          {/* Column 1: Logo & Trust Badges */}
          <div className={styles.footerCol}>
            <div className={styles.logoWrapper}>
              <Image 
                src="https://tiger365com.com/wp-content/uploads/2025/04/logo-text-768x134.png"
                alt="Tiger 365 Logo"
                width={200}
                height={35}
                className={styles.logoImg}
              />
              <h2 className={styles.brandTitle}>Tiger 365</h2>
            </div>
            
            <div className={styles.badgeDivider}></div>

            <div className={styles.badgeGallery}>
              <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.badgeLink}>
                <Image 
                  src="https://tiger365com.com/wp-content/uploads/2025/06/gt-qpz47edu3jil5ghx24o7blfh29astwgtmnz9itkgsi.png"
                  alt="gt - tiger365com"
                  width={45}
                  height={45}
                  className={styles.badgeImg}
                />
              </a>
              <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.badgeLink}>
                <Image 
                  src="https://tiger365com.com/wp-content/uploads/2025/06/antillephone-qpz46hhhgc9jv3tpe8g9ebqc9rsychu7u559q4x8ua.png"
                  alt="antillephone - tiger365com"
                  width={45}
                  height={45}
                  className={styles.badgeImg}
                />
              </a>
              <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.badgeLink}>
                <Image 
                  src="https://tiger365com.com/wp-content/uploads/2025/06/18plus-qpz45r604z9iu0vxnx2pgidfmzeocyxqeivoae09oi.png"
                  alt="18plus - tiger365com"
                  width={45}
                  height={45}
                  className={styles.badgeImg}
                />
              </a>
              <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.badgeLink}>
                <Image 
                  src="https://tiger365com.com/wp-content/uploads/2025/06/gamecare-qpz470a990zabb2ecgkss6zk5h8amfwukq6zbo5ddu.png"
                  alt="gamecare - tiger365com"
                  width={45}
                  height={45}
                  className={styles.badgeImg}
                />
              </a>
            </div>
          </div>

          {/* Column 2: Company Menu */}
          <div className={styles.footerCol}>
            <h3 className={styles.colTitle}>Company</h3>
            <div className={styles.colDivider}></div>
            <ul className={styles.linksList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="#about">About us</Link></li>
              <li><a href={getWhatsAppLink("Games")} target="_blank" rel="noopener noreferrer">Games</a></li>
              <li><a href={getWhatsAppLink("Blogs")} target="_blank" rel="noopener noreferrer">Blogs</a></li>
              <li><a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer">Contact us</a></li>
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div className={styles.footerCol}>
            <h3 className={styles.colTitle}>Important Links</h3>
            <div className={styles.colDivider}></div>
            <ul className={styles.linksList}>
              <li><a href={getWhatsAppLink("Terms & Conditions")} target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
              <li><a href={getWhatsAppLink("Privacy Policy")} target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyrightText}>
            Copyright &copy; {new Date().getFullYear()} tiger365com.com. All Rights Reserved.
          </p>
          <div className={styles.footerBtnBox}>
            <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.footerWaBtn}>
              💬 Chat on WhatsApp for Instant ID
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
