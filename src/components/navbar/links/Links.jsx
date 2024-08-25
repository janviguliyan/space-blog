"use client";

import styles from "@/components/navbar/links/links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";

const links = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
];

const Links = () => {
    const [open, setOpen] = useState(false)

    // TEMPORARY
    const session = true;
    const isAdmin = true;

    return (
        <main className={styles.container}>
            <div className={styles.links}>
                {links.map((link => (
                    <NavLink item={link} key={link.title} />
                )))}{
                    session ? (
                        <>
                            {
                                isAdmin && (
                                    <NavLink item={{title: "Admin", path: "/admin"}} />
                                )
                            }
                            <button className={styles.logout}>Logout</button>
                        </>
                    ) : (
                        <NavLink item={{title: "Login", path: "/login"}} />
                    )
                }
            </div>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {
                open && (
                    <div className={styles.mobileLinks}>
                        {links.map((link) => (
                            <NavLink item={link} key={link.title} />
                        ))}
                    </div>
                )
            }
        </main>
    );
  };
  
  export default Links;