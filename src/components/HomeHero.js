import styles from "./HomeHero.module.css"
import { Button } from "react-bootstrap";

const HomeHero = () => {
    
    // return (
    //     <div> HELLO </div>
    // );

    return (
        <div className={styles.heroDiv}>
            <div className={styles.heroTextDiv}>
                <div className={styles.heroHeader}>
                    <p className={styles.heroHeaderTitle}>
                        <span>Hi, I'm Harshit Lohani.</span>
                    </p>
                    <p className={styles.heroHeaderTitle}>
                        <b className={styles.blue}>Software Developer </b>
                        <span>and</span>
                        <b className={styles.blue}> UX Designer</b>
                    </p>
                </div>
                <div className={styles.heroFooter}>
                    <p className={styles.heroFooterText}>
                        <span>{`Software Developer Intern at `}</span>
                        <b>Cisco </b>
                        <span>and</span>
                        <b> Hexacorp</b>
                    </p>
                    <p className={styles.heroFooterText}>
                        <span>UI and UX Designer at </span>
                        <b>Dairy Systems</b>
                    </p>
                </div>
            </div>
            <Button variant="primary">My Resume ↗</Button>
        </div>

    );
}


export default HomeHero