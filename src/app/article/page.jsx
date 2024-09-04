import styles from "@/app/article/article.module.css";
import PostCard from "@/components/postCard/page";
import { getData } from "@/app/blog/page";


const ReportPage = async () => {
    const data = await getData({ limit: 9, type: "articles" });
    const posts = data.results;

    return (
        <main>
            <div className={styles.container}>
                {posts.map((post)=>(
                    <div className={styles.post} key={post.id}>
                    <PostCard post={post} />
                    </div>
                ))}
            </div>
        </main>
    );
};

export default ReportPage;