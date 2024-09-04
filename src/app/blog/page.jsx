import styles from "@/app/blog/blog.module.css";
import PostCard from "@/components/postCard/page";
import Link from "next/link";

export const getData = async ({limit, type}) =>{
    const res = await fetch(`https://api.spaceflightnewsapi.net/v4/${type}/?limit=${limit}`);

    if(!res.ok){
        throw new Error("Something went wrong");
    }

    return res.json();
}

const BlogPage = async () => {
    const data = await getData({ limit: 9, type: "blogs" });
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
            <div className={styles.navigate}>
                <Link href={data.next}>Next</Link>
            </div>
        </main>
    );
};

export default BlogPage;