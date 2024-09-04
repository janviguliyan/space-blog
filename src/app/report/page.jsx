import styles from "@/app/report/report.module.css";
import PostCard from "@/components/postCard/page";
import { getData } from "@/app/blog/page";


const ReportPage = async () => {
    const data = await getData({ limit: 9, type: "reports" });
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