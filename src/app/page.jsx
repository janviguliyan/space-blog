// export default function Home() {
//   return (
//     <main>
//       Hello
//     </main>
//   );
// }

import Image from "next/image";
import styles from "@/app/page.module.css"

const Home = () => {
  return (
    <main>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Space Tech Blogs</h1>
            <p className={styles.desp}>Stay informed with the latest space news from a curated selection of 38+ trusted sites, including top sources.</p>
            <div className={styles.buttons}>
              <button className={styles.buttonRead}>Read Now</button>
              <button className={styles.buttonLearn}>Learn More</button>
            </div>
          </div>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>38+</h1>
              <p>Trusted Sources</p>
            </div>
            <div className={styles.box}>
              <h1>150+</h1>
              <p>In-Depth Blogs</p>
            </div>
            <div className={styles.box}>
              <h1>24/7</h1>
              <p>Real-Time Updates</p>
            </div>
          </div>
          <div className={styles.brands}>
            <p><b>Top sources:</b></p>
            <Image src={"/site_logo_bw.png"} alt="sites" fill className={styles.brandImg} />
          </div> 
        </div>
        <div className={styles.blog}>
          <h2>Blogs:</h2>
          <div className={styles.blogPost}>
            Container
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;