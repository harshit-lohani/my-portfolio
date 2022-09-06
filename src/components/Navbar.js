import styles from "./Navbar.module.css"
import { useCallback } from "react";

const Navbar = () => {
    const onWorkTextClick = useCallback(() => {
        const anchor = document.querySelector(
          "[data-scroll-to='projectListContainer']"
        );
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }, []);

      const onAboutClick = useCallback(() => {
        const anchor = document.querySelector(
          "[data-scroll-to='projectListContainer']"
        );
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }, []);

    return (
        <div className={styles.navDiv}>
        <b className={styles.portfolioB}>Portfolio</b>
        <div className={styles.navBarDiv}>
          <div className={styles.workDiv} onClick={onWorkTextClick}>
            Work
          </div>
          <div className={styles.portfolioB} onClick={onAboutClick}>About</div>
          <div className={styles.portfolioB}>Resume</div>
        </div>
      </div>
    );

}

export default Navbar;