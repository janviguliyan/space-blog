import styles from "@/app/blog/[slug]/singlePost.module.css"
import Image from "next/image";

const SinglePostPagePage = () => {
    return (
        <main>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image src={"https://images.unsplash.com/photo-1724770573710-6bdd6d679e36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} fill className={styles.img} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Ramses: A new mission racing to land on asteroid Apophis</h1>
                    <p className={styles.desp}>When a skyscraper-sized asteroid narrowly misses Earth in 2029, three spacecraft may be along for the ride.</p>
                </div>
            </div>
        </main>
    )
}

export default SinglePostPagePage;