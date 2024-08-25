import Link from "next/link";
import Links from "./links/Links";
import styles from "@/components/navbar/navbar.module.css"

const Navbar = () => {
    return (
      <main className={styles.container}>
        <Link href={"/"} className={styles.logo}>logo</Link>
        <div>
            <Links />
        </div>
      </main>
    );
  };
  
  export default Navbar;