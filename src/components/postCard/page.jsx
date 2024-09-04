import styles from "@/components/postCard/postCard.module.css"
import Image from "next/image"
import Link from "next/link"

const PostCard = ({post}) => {
    if (!post) {
        return <div>Error: Post data is missing.</div>;
    }

    const dateString = post.published_at;
    const dateOnly = new Date(dateString).toISOString().split('T')[0];

    return (
        <main>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.imgContainer}>
                    {post.image_url ? (
                        <img
                            src={post.image_url}
                            alt={post.title}
                            className={styles.img}
                        />
                    ) : (
                        <div className={styles.placeholder}>No Image Available</div> // Optional: handle cases with no image
                    )}
                        {/* <img
                            src={post.image_url}
                            alt={post.title}
                            className={styles.img}
                        /> */}
                        {/* <Image src={"https://images.unsplash.com/photo-1724770573710-6bdd6d679e36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} fill className={styles.img} /> */}
                    </div>
                    <span className={styles.date}>{dateOnly}</span>
                </div>
                <div className={styles.bottom}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <p className={styles.desp}>{post.summary}</p>
                    <Link className={styles.link} 
                    href={post.url} target="_blank"
                    >Read More</Link>
                </div>
            </div>
        </main>
    )
    
}

export default PostCard