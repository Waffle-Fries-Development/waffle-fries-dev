import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>

            <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src="/waffle-fries-dev/waffle.png"
                    alt="Waffle Logo"
                    width={900}
                    height={600}
                    priority
                />
            </div>
            <div className={styles.center}>
                <p><a className={styles.link} href={"https://github.com/Waffle-Fries-Development"} target={"_blank"}>Github</a></p>
                <p>Contact: hayden@wafflefries.dev</p>
            </div>

        </main>
    );
}
