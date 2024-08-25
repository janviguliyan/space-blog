import styles from "@/app/contact/contact.module.css"

const ContactPage = () => {
    return (
        <main>
            <div className={styles.container}>
                <div className={styles.contactContainer}>
                    <div className={styles.contactDesp}>
                        <h2>Get in touch</h2>
                        <p>
                            We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
                        </p>
                    </div>
                    <div className={styles.contactInfo}>
                        <div className={styles.info}>
                            <p><b>Location:</b><br />
                                    123 Space Explorer Avenue,<br />
                                    Orbital City, Galaxy 001
                            </p>
                            <p><b>Phone:</b><br />
                                (+123) 456-7890
                            </p>
                        </div>
                        <div className={styles.info}>
                            <p><b>Office Hours:</b><br />
                                Monday - Friday: 9:00 AM - 6:00 PM<br />
                                Saturday: 10:00 AM - 2:00 PM<br />
                                Sunday: Closed
                            </p>
                            <p><b>Email:</b><br />
                                contact@spacetechblogs.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.fromContainer}>
                    <h2>Contact Us</h2>
                    <form action="" className={styles.form}>
                        <div className={styles.nameEmail}>
                            <div className={styles.field}>
                                <label>Name</label>
                                <input type="text" placeholder="Enter your name"></input>
                            </div>
                            <div className={styles.field}>
                                <label>Email</label>
                                <input type="email" placeholder="Enter your mail"></input>
                            </div>
                        </div>
                        <div className={styles.field}>
                            <label>Message</label>
                            <textarea name="" id="" cols="40" rows="20" placeholder="Enter your message"></textarea>
                        </div>
                        <button className={styles.button}>Submit</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default ContactPage;