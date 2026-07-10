import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Link from "next/link";
import Image from "next/image";
import styles from "./blogs.module.css";

export const metadata: Metadata = {
  title: "Blogs - Tiger365 Platform Ultimate Guide",
  description: "Stay updated with the latest blogs, guides, and updates from Tiger365 - the premier sports exchange and live casino platform in India.",
  alternates: {
    canonical: '/blogs',
  },
};

export default function BlogsPage() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <WhatsAppFloat />

      <div className="layout-body-wrapper">
        <div className="layout-content-area">
          <section className={styles.blogsSection}>
            <div className="container">
              <h1 className="section-title text-center">
                Our Latest <span>Blogs</span>
              </h1>
              <p className={`text-center ${styles.subtitle}`}>
                Stay informed with the latest updates, tournament analysis, and guides from the cricket world and beyond.
              </p>

              <div className={styles.blogsGrid}>
                {/* Blog Card 1 */}
                <div className={styles.blogCard}>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src="/banners/cricket-winners-banner.png"
                      alt="Women's Cricket World Cup Winners List"
                      fill
                      className={styles.cardImage}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <span className={styles.cardTag}>Cricket Guide</span>
                    <h2 className={styles.cardTitle}>
                      Women's Cricket World Cup Winners List (1973–2025): All ODI & T20 Champions
                    </h2>
                    <p className={styles.cardExcerpt}>
                      Two facts stand out in the history of the women's game. India won their first-ever World Cup in November 2025, defeating South Africa by 52 runs in Navi Mumbai. In turn, Australia reclaimed the Women's T20 title...
                    </p>
                    <div className={styles.cardFooter}>
                      <span className={styles.cardDate}>Last updated: July 10, 2026</span>
                      <Link href="/womens-cricket-world-cup-winners-list/" className={styles.readMoreBtn}>
                        Show More →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
}
