import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Link from "next/link";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "India Football Braces for Historic Run Against Brazil, Uruguay and Panama",
  description: "Indian football is preparing for an extraordinary international window, with the national team set to face Panama, five-time FIFA World Cup winners Brazil and two-time champions Uruguay.",
  alternates: {
    canonical: '/india-football-team-squad-brazil-uruguay-panama-friendlies-2026/',
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
                  <span className={styles.categoryTag}>Football News</span>
                  <h1 className={styles.articleTitle}>
                    India Football Braces for Historic Run Against Brazil, Uruguay and Panama
                  </h1>
                  <div className={styles.articleMeta}>
                    <div className={styles.metaItem}>
                      <span>📅</span> Last updated: September 4, 2026
                    </div>
                    <div className={styles.metaItem}>
                      <span>👤</span> By Tiger365 Editors
                    </div>
                  </div>
                </header>

                {/* Featured Image */}
                <div className={styles.imageWrapper}>
                  <Image
                    src="/banners/football_banner.jpg"
                    alt="India Football Friendlies vs Brazil, Uruguay and Panama"
                    fill
                    className={styles.featuredImage}
                    sizes="(max-width: 1200px) 100vw, 850px"
                    priority
                  />
                </div>

                {/* Article Body */}
                <div className={styles.articleContent}>
                  
                  <p className={styles.paragraph}>
                    New Delhi, September 4, 2026: Indian football is preparing for an extraordinary international window, with the national team set to face Panama, five-time FIFA World Cup winners Brazil and two-time champions Uruguay over the coming weeks. For Indian supporters, the schedule represents one of the most ambitious stretches of international football in recent memory and could provide the Blue Tigers with an opportunity to measure their progress against some of the world's most established teams.
                  </p>
                  
                  <p className={styles.paragraph}>
                    Head coach Khalid Jamil has named a 26-member squad for the demanding sequence of fixtures. India will begin against Panama in Bengaluru on September 26 before travelling to Kolkata for matches against Brazil on October 3 and Uruguay on October 6. All three opponents featured at the 2026 FIFA World Cup, making the series particularly valuable from an international-development perspective. (<a href="https://www.olympics.com/en/news/india-football-team-squad-brazil-uruguay-panama-friendlies-2026" target="_blank" rel="noopener noreferrer">Olympics</a>)
                  </p>

                  <h2 className={styles.heading2}>A Historic Brazil Encounter</h2>
                  <p className={styles.paragraph}>
                    The most anticipated fixture will undoubtedly be India versus Brazil.
                  </p>
                  <p className={styles.paragraph}>
                    The match in Kolkata will mark the first meeting between the senior men's national teams of India and Brazil. Brazil's status as a five-time World Cup champion gives the fixture enormous significance, particularly for Indian footballers who rarely receive the opportunity to face an opponent of such stature.
                  </p>
                  <p className={styles.paragraph}>
                    Brazil's global reputation also means the game is attracting attention beyond traditional Indian football audiences. Reports indicate that tickets for the fixture generated extraordinary demand, underlining the public interest surrounding the visit of the South American giants. (<a href="https://gulfnews.com/sport/football/india-brazil-friendly-tickets-sell-out-within-minutes-1.500661151" target="_blank" rel="noopener noreferrer">Gulf News</a>)
                  </p>
                  <p className={styles.paragraph}>
                    For India's players, however, the challenge will be to treat the match as a genuine competitive opportunity rather than simply an occasion to meet famous opponents.
                  </p>

                  <h2 className={styles.heading2}>Panama Comes First</h2>
                  <p className={styles.paragraph}>
                    Before Brazil arrives, India will have an important test against Panama.
                  </p>
                  <p className={styles.paragraph}>
                    The match is scheduled for September 26 at Bengaluru's Sree Kanteerava Stadium. Panama are a competitive CONCACAF side with recent World Cup experience, meaning India will face a physically demanding and tactically organised opponent before taking on Brazil. (<a href="https://sports.ndtv.com/football/khalid-jamil-names-26-member-squad-for-panama-brazil-uruguay-friendlies-11983797" target="_blank" rel="noopener noreferrer">NDTV Sports</a>)
                  </p>
                  <p className={styles.paragraph}>
                    The Panama fixture could therefore be particularly important for Jamil. A strong performance would provide confidence before the squad travels to Kolkata. It will also allow the coaching staff to assess how the selected players handle international opposition that may be stronger and more experienced than many of the teams India regularly faces.
                  </p>

                  <h2 className={styles.heading2}>Uruguay Provide Another Major Challenge</h2>
                  <p className={styles.paragraph}>
                    Three days after the Brazil fixture, India will face Uruguay at Kolkata's Salt Lake Stadium.
                  </p>
                  <p className={styles.paragraph}>
                    Uruguay have a remarkable footballing history, having won the FIFA World Cup in 1930 and 1950. Their reputation for producing technically gifted and highly competitive players makes the match another difficult examination for India.
                  </p>
                  <p className={styles.paragraph}>
                    The three-game sequence therefore offers three different tactical challenges. Panama will test India first, Brazil will provide an elite technical challenge, and Uruguay will offer another encounter against a highly experienced South American football nation.
                  </p>

                  <h2 className={styles.heading2}>Khalid Jamil's 26-Man Squad</h2>
                  <p className={styles.paragraph}>
                    Jamil's squad contains a combination of experienced players and younger names looking to establish themselves internationally.
                  </p>
                  <p className={styles.paragraph}>
                    Goalkeepers include Gurpreet Singh Sandhu, Albino Gomes, Prabhsukhan Singh Gill and Som Kumar. The defensive group features Anwar Ali, Akash Mishra, Abhishek Singh Tekcham and several other players.
                  </p>
                  <p className={styles.paragraph}>
                    The midfield includes Anirudh Thapa, Sahal Abdul Samad, Lalengmawia Ralte, Farukh Choudhary and Ricky Shabong, while the forward options include Manvir Singh, Rahim Ali, Ryan Williams and Vikram Partap Singh. (<a href="https://news.webindia123.com/news/articles/sports/20260831/4493050.html" target="_blank" rel="noopener noreferrer">Web India News</a>)
                  </p>
                  <p className={styles.paragraph}>
                    Notably, established names such as Sandesh Jhingan and Lallianzuala Chhangte are absent from the announced squad. That has naturally generated debate among supporters, but Jamil has emphasised the importance of selecting players based on current requirements rather than reputation.
                  </p>

                  <h2 className={styles.heading2}>A Different Kind of Preparation</h2>
                  <p className={styles.paragraph}>
                    India's preparatory camp is scheduled to begin in Bengaluru on September 14.
                  </p>
                  <p className={styles.paragraph}>
                    The timing gives the coaching staff approximately 12 days to work with the squad before the Panama fixture. After that match, the team will travel to Kolkata for the Brazil and Uruguay games. (<a href="https://indianexpress.com/article/sports/football/india-announce-squad-for-brazil-uruguay-panama-matches-10857670/lite/" target="_blank" rel="noopener noreferrer">The Indian Express</a>)
                  </p>
                  <p className={styles.paragraph}>
                    The short preparation period means tactical clarity will be essential. India cannot completely change its playing philosophy in a matter of days. Instead, Jamil will likely focus on defensive organisation, transition play, set pieces and ensuring that players understand their individual responsibilities. Against higher-ranked teams, maintaining shape can be more important than attempting to dominate possession.
                  </p>

                  <h2 className={styles.heading2}>What Can India Learn From Brazil?</h2>
                  <p className={styles.paragraph}>
                    The Brazil fixture could provide perhaps the most valuable learning experience.
                  </p>
                  <p className={styles.paragraph}>
                    Brazil traditionally possess technically gifted players capable of controlling matches through possession and individual skill. India may spend long periods without the ball, meaning the team's defensive concentration will be tested. However, the match could also reveal where India's players can exploit opportunities.
                  </p>
                  <p className={styles.paragraph}>
                    When facing stronger teams, counterattacking situations can become important. Winning possession and moving quickly into attacking areas could allow India to create chances even if Brazil control most of the match. Set pieces could similarly offer opportunities.
                  </p>

                  <h2 className={styles.heading2}>Predictions Will Be Difficult</h2>
                  <p className={styles.paragraph}>
                    The difference in international experience means Brazil and Uruguay are likely to be viewed as favourites when compared with India. Panama will also present a significant challenge.
                  </p>
                  <p className={styles.paragraph}>
                    Nevertheless, friendly matches are notoriously difficult to predict. Coaches can experiment with formations, substitute players more frequently and prioritise preparation over the final score. Injuries and squad rotation can also influence the outcome. For supporters following pre-match forecasts or publicly available odds, those figures should therefore be understood as probability estimates rather than guaranteed results.
                  </p>
                  <p className={styles.paragraph}>
                    For India, the quality of the performance may ultimately matter more than the scoreline. Keeping a strong defensive structure against Brazil, creating chances against Uruguay and competing effectively with Panama would all provide useful indicators of progress.
                  </p>

                  <h2 className={styles.heading2}>A Turning Point for Indian Football?</h2>
                  <p className={styles.paragraph}>
                    Jamil has described the Brazil and Uruguay fixtures as a potential turning point for Indian football, particularly because of the exposure they will provide to the country's players. (<a href="https://indianexpress.com/article/sports/football/khalid-jamil-india-football-turning-point-brazil-uruguay-10860511/lite/" target="_blank" rel="noopener noreferrer">The Indian Express</a>)
                  </p>
                  <p className={styles.paragraph}>
                    That assessment reflects the wider importance of the fixtures. Indian football needs regular exposure to high-quality international competition if its players are to develop experience against different tactical systems. Domestic football remains essential, but international matches provide a completely different environment. Facing elite opponents can reveal weaknesses that might remain hidden against more familiar opposition.
                  </p>

                  <h2 className={styles.heading2}>The Bigger Picture</h2>
                  <p className={styles.paragraph}>
                    The upcoming fixtures also arrive during an uncertain period for Indian domestic football. The international matches provide supporters with something positive to look forward to while discussions around the domestic calendar continue.
                  </p>
                  <p className={styles.paragraph}>
                    For the national team, the priority should be extracting maximum value from the opportunity. The players do not need to defeat Brazil to make the fixture meaningful. Competing intelligently, remaining disciplined and creating genuine scoring opportunities would represent valuable progress. Similarly, a competitive performance against Uruguay could provide confidence for the future, while the Panama match offers perhaps the most realistic opportunity to target a positive result.
                  </p>

                  <h2 className={styles.heading2}>India Enter a New Challenge</h2>
                  <p className={styles.paragraph}>
                    The next few weeks could become an important chapter in Indian football. Panama, Brazil and Uruguay will provide three demanding examinations, while Jamil will have the opportunity to evaluate a new group of players against international opposition.
                  </p>
                  <p className={styles.paragraph}>
                    For supporters, the fixtures offer an extraordinary chance to see India share the pitch with some of football's most respected national teams. The results will inevitably dominate headlines, but the long-term value will come from what India's players learn.
                  </p>
                  <p className={styles.paragraph}>
                    If the Blue Tigers can turn these matches into valuable international experience, the September-October window could prove far more important than a handful of friendly results. It could become part of a longer journey towards building an Indian national team capable of competing with greater confidence on the international stage.
                  </p>

                  {/* Call To Action Block matching standard website CTAs */}
                  <div className={styles.articleCta}>
                    <h3 className={styles.ctaTitle}>Ready to Play on Tiger365?</h3>
                    <p className={styles.ctaText}>
                      Get your official Tiger365 ID instantly on WhatsApp. Log in securely and play live sports exchange markets on all your favorite events!
                    </p>
                    <div className={styles.ctaBtnWrapper}>
                      <WhatsAppButton className="btn-primary">
                        💬 Get Your Instant WhatsApp ID Now
                      </WhatsAppButton>
                    </div>
                  </div>

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
