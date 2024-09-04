// export default function Home() {
//   return (
//     <main>
//       Hello
//     </main>
//   );
// }

import Image from "next/image";
import styles from "@/app/page.module.css"
import PostCard from "@/components/postCard/page";
import Link from "next/link";
import { getData } from "./blog/page";

const Home = async () => {
  const blogData = await getData({ limit: 3, type: "blogs" });
  const blogPosts = blogData.results;

  const reportData = await getData({ limit: 3, type: "reports" });
  const reportPosts = reportData.results;

  const articleData = await getData({ limit: 3, type: "articles" });
  const articlePosts = articleData.results;

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
        </div>
        <div className={styles.about}> 
          <div className={styles.intro}>
            <h2>Welcome to Our Knowledge Hub</h2>
            <p>
            At Space Tech Blogs, we are dedicated to bringing you insightful content that spans across a wide range of topics. Whether you're here to explore the latest trends in technology, gain in-depth analysis through our reports, or simply enjoy thought-provoking articles, we've got something for everyone.<br /><br />
            Take a journey through our blogs, reports, and articles—each crafted with care and expertise. We invite you to dive in, explore, and discover the ideas that resonate with you.
            </p>
          </div>
          <div className={styles.brands}>
            <p><b>Top sources:</b></p>
            <Image src={"/site_logo_bw.png"} alt="sites" fill className={styles.brandImg} />
          </div>
        </div>
        <div className={styles.blog}>
          <div className={styles.titleBar}>
            <h2>Articles:</h2>
            <Link href={"/article"} className={styles.show}>Show All</Link>
          </div>
          <div className={styles.posts}>
            {articlePosts.map((post)=>(
                <div className={styles.blogPost} key={post.id}>
                  <PostCard post={post} />
                </div>
            ))}
          </div>
        </div>
        <div className={styles.blog}>
          <div className={styles.titleBar}>
            <h2>Blogs:</h2>
            <Link href={"/blog"} className={styles.show}>Show All</Link>
          </div>
          <div className={styles.posts}>
            {blogPosts.map((post)=>(
                <div className={styles.blogPost} key={post.id}>
                  <PostCard post={post} />
                </div>
            ))}
          </div>
        </div>     
        <div className={styles.blog}>
          <div className={styles.titleBar}>
            <h2>Reports:</h2>
            <Link href={"/report"} className={styles.show}>Show All</Link>
          </div>
          <div className={styles.posts}>
            {reportPosts.map((post)=>(
                <div className={styles.blogPost} key={post.id}>
                  <PostCard post={post} />
                </div>
            ))}
          </div>
        </div>
        
      </div>
    </main>
  );
};

export default Home;