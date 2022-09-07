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

      const onResumeClick = useCallback(() => {
        const anchor = document.querySelector(
          "[data-scroll-to='resumeContainer']"
        );
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }, []);

    return (
      <nav className={styles.navDiv}>
        <b className={styles.navBarLogo}>Portfolio</b>
        <div className={styles.navBarDiv}>
          <div className={styles.navBarLink} onClick={onWorkTextClick}>Work</div>
          <div className={styles.navBarLink} onClick={onAboutClick}>About</div>
          <div className={styles.navBarLink} onClick={onResumeClick}>Resume</div>
        </div>
      </nav>
    );

}

export default Navbar;