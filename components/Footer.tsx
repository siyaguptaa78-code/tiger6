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
            Tiger365 is a thrilling fantasy sports platform. However, we advise you to only participate in fantasy sports if you are 18 years or older and legally permitted to do so. Please note that Tiger365 is unavailable in Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, Telangana, and Tamil Nadu because these states have prohibited fantasy sports. All Tiger365 competitions are governed by the terms and conditions of the site. As a result, we recommend that you review them before engaging in any competitions.
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
              <li><Link href="/blogs">Blogs</Link></li>
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
            Copyright &copy; 2026 tiger365playid.com. All Rights Reserved.
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
