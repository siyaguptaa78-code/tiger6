import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ArticleFaq from "./ArticleFaq";
import Link from "next/link";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Women's Cricket World Cup Winners List (1973–2025): All ODI & T20 Champions",
  description: "Complete Women's Cricket World Cup winners list — every ODI World Cup champion from 1973 to India's maiden 2025 title, plus all Women's T20 World Cup winners including Australia's 2026 triumph.",
  alternates: {
    canonical: '/womens-cricket-world-cup-winners-list/',
  },
};

export default function BlogDetailPage() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <WhatsAppFloat />

      <div className="layout-body-wrapper">
        <div className="layout-content-area">
          <article className={styles.articleContainer}>
            <div className="container">
              <div className={styles.articleWrapper}>
                
                {/* Back button */}
                <Link href="/blogs" className={styles.backBtn}>
                  ← Back to Blogs
                </Link>

                {/* Article Header */}
                <header className={styles.articleHeader}>
                  <span className={styles.categoryTag}>Cricket Guide</span>
                  <h1 className={styles.articleTitle}>
                    Women's Cricket World Cup Winners List (1973–2025): All ODI & T20 Champions
                  </h1>
                  <div className={styles.articleMeta}>
                    <div className={styles.metaItem}>
                      <span>📅</span> Last updated: July 10, 2026
                    </div>
                    <div className={styles.metaItem}>
                      <span>👤</span> By Tiger365 Editors
                    </div>
                  </div>
                </header>

                {/* Featured Image */}
                <div className={styles.imageWrapper}>
                  <Image
                    src="/banners/cricket-winners-banner.png"
                    alt="Women's Cricket World Cup Winners List"
                    fill
                    className={styles.featuredImage}
                    sizes="(max-width: 1200px) 100vw, 850px"
                    priority
                  />
                </div>

                {/* Article Body */}
                <div className={styles.articleContent}>
                  
                  <p className={styles.paragraph}>
                    Two facts stand out in the history of the women's game. India won their first-ever World Cup in November 2025, defeating South Africa by 52 runs in Navi Mumbai. In turn, Australia reclaimed the Women's T20 title, beating England by seven wickets at Lord's on 5 July 2026.
                  </p>

                  <p className={styles.paragraph}>
                    This one-two result underlines the rise of the women's game. It's worth noting that the women's game got going before the men's version had even started. The first Women's Cricket World Cup was held in 1973, and it was hosted by England (who went on to win the tournament). This took place two years before the first ever men's World Cup. Here is the full list with winners and hosts for both the ODI and T20 World Cups.
                  </p>

                  {/* ODI Table Heading */}
                  <h2 className={styles.heading2}>Women's ODI World Cup Winners List (1973-2025)</h2>

                  {/* ODI Winners Table */}
                  <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <th>Year</th>
                          <th>Winner</th>
                          <th>Runner-up</th>
                          <th>Host</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1973</td>
                          <td>England</td>
                          <td>Australia</td>
                          <td>England</td>
                        </tr>
                        <tr>
                          <td>1978</td>
                          <td>Australia</td>
                          <td>England</td>
                          <td>India</td>
                        </tr>
                        <tr>
                          <td>1982</td>
                          <td>Australia</td>
                          <td>England</td>
                          <td>New Zealand</td>
                        </tr>
                        <tr>
                          <td>1988</td>
                          <td>Australia</td>
                          <td>England</td>
                          <td>Australia</td>
                        </tr>
                        <tr>
                          <td>1993</td>
                          <td>England</td>
                          <td>New Zealand</td>
                          <td>England</td>
                        </tr>
                        <tr>
                          <td>1997</td>
                          <td>Australia</td>
                          <td>New Zealand</td>
                          <td>India</td>
                        </tr>
                        <tr>
                          <td>2000</td>
                          <td>New Zealand</td>
                          <td>Australia</td>
                          <td>New Zealand</td>
                        </tr>
                        <tr>
                          <td>2005</td>
                          <td>Australia</td>
                          <td>India</td>
                          <td>South Africa</td>
                        </tr>
                        <tr>
                          <td>2009</td>
                          <td>England</td>
                          <td>New Zealand</td>
                          <td>Australia</td>
                        </tr>
                        <tr>
                          <td>2013</td>
                          <td>Australia</td>
                          <td>West Indies</td>
                          <td>India</td>
                        </tr>
                        <tr>
                          <td>2017</td>
                          <td>England</td>
                          <td>India</td>
                          <td>England</td>
                        </tr>
                        <tr>
                          <td>2022</td>
                          <td>Australia</td>
                          <td>England</td>
                          <td>New Zealand</td>
                        </tr>
                        <tr>
                          <td>2025</td>
                          <td>India</td>
                          <td>South Africa</td>
                          <td>India & Sri Lanka</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* H3 Section */}
                  <h3 className={styles.heading3}>The Last ODI World Cup Victory: India's Historic Win</h3>
                  <p className={styles.paragraph}>
                    India's first ODI World Cup victory in 2025 was the culmination of two decades of heartbreak. It was in Navi Mumbai on 2 November that India beat South Africa by 52 runs to lift the trophy for the first time. Chasing down India's total of 298 for 7, South Africa were bowled out with 52 runs still needed, with Deepti Sharma starring with the ball. Shafali Verma top-scored with 87 for the champions. With this win, India registered their first-ever ODI World Cup victory and South Africa played their first-ever ODI World Cup final. Much like how the men's team's 1983 victory reverberated around the country for the next few decades, the true impact of India's landmark win in Navi Mumbai in 2025 will be felt a decade from now, in the WPL and beyond.
                  </p>

                  {/* T20 Table Heading */}
                  <h2 className={styles.heading2}>Women's T20 World Cup Winners List (2009-2026)</h2>

                  {/* T20 Winners Table */}
                  <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <th>Year</th>
                          <th>Winner</th>
                          <th>Runner-up</th>
                          <th>Final Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>2009</td>
                          <td>England</td>
                          <td>New Zealand</td>
                          <td>Lord's, England</td>
                        </tr>
                        <tr>
                          <td>2010</td>
                          <td>Australia</td>
                          <td>New Zealand</td>
                          <td>Bridgetown, Barbados</td>
                        </tr>
                        <tr>
                          <td>2012</td>
                          <td>Australia</td>
                          <td>England</td>
                          <td>Colombo, Sri Lanka</td>
                        </tr>
                        <tr>
                          <td>2014</td>
                          <td>Australia</td>
                          <td>England</td>
                          <td>Dhaka, Bangladesh</td>
                        </tr>
                        <tr>
                          <td>2016</td>
                          <td>West Indies</td>
                          <td>Australia</td>
                          <td>Kolkata, India</td>
                        </tr>
                        <tr>
                          <td>2018</td>
                          <td>Australia</td>
                          <td>England</td>
                          <td>North Sound, Antigua</td>
                        </tr>
                        <tr>
                          <td>2020</td>
                          <td>Australia</td>
                          <td>India</td>
                          <td>Melbourne, Australia</td>
                        </tr>
                        <tr>
                          <td>2023</td>
                          <td>Australia</td>
                          <td>South Africa</td>
                          <td>Cape Town, South Africa</td>
                        </tr>
                        <tr>
                          <td>2024</td>
                          <td>New Zealand</td>
                          <td>South Africa</td>
                          <td>Dubai, UAE</td>
                        </tr>
                        <tr>
                          <td>2026</td>
                          <td>Australia</td>
                          <td>England</td>
                          <td>Lord's, England</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className={styles.paragraph}>
                    Australia's women's team is back on top of the women's cricket world once again. After New Zealand's historic win in 2024, Australia made an emphatic statement of intent by beating England by seven wickets in the final at Lord's on 5 July 2026. England made 150 for 4 batting first before Australia's batters, led by Beth Mooney and Phoebe Litchfield, raced to a seven-wicket win inside 17.1 overs. With this win, Australia claimed their seventh T20 World Cup title. No team in any major sport dominates its global tournaments quite like Australia's women. The counterweight, of course, arrived when India's women made their own mark on the world map with their ODI World Cup win in 2025. At the rate things are going, the next decade's iteration of this list will look markedly different from the one you see above.
                  </p>

                  {/* FAQ Interactive Accordion Component */}
                  <ArticleFaq />

                  {/* Call To Action Block matching standard website CTAs */}
                  <div className={styles.articleCta}>
                    <h3 className={styles.ctaTitle}>Ready to Play on Tiger365?</h3>
                    <p className={styles.ctaText}>
                      Get your official Tiger365 ID instantly on WhatsApp. Log in securely and play live sports exchange markets on all cricket tournaments!
                    </p>
                    <div className={styles.ctaBtnWrapper}>
                      <WhatsAppButton className="btn-primary">
                        💬 Get Your Instant WhatsApp ID Now
                      </WhatsAppButton>
                    </div>
                  </div>

                  {/* Footer metadata */}
                  <p className={styles.lastUpdated}>
                    Last updated on 10 July 2026: India's 2025 Women's ODI World Cup win and Australia's 2026 T20 win have been added. Updated after every tournament.
                  </p>

                </div>
              </div>
            </div>
          </article>

          <Footer />
        </div>
      </div>
    </div>
  );
}
