import styles from "./ResponsibleGaming.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function ResponsibleGaming() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.warningHeader}>
            <span className={styles.icon}>⚠️</span>
            <h2>Responsible Gaming at Tiger365</h2>
          </div>

          <div className={styles.content}>
            <p className={styles.paragraph}>
              Users may enjoy risk-free online gaming owing to responsible gaming initiatives. It works by encouraging users to gamble within their means and manage time and finances wisely. In addition, Tiger365 provides helpful tools that enable customers to limit their losses and avoid developing unhealthy gaming habits. Gaming should be seen as a type of entertainment rather than a means of generating income.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
