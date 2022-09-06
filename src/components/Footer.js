import styles from "./Footer.module.css";


const Footer = () => {
    

    return (
        <div className={styles.footerDiv}>
        <div className={styles.footerDetailsDiv}>
          <div className={styles.footerTopDiv}>
            <div className={styles.footerHeadingText}>
              Looking for some one to join an awesome venture
            </div>
            <div className={styles.footerCTADiv}>
              <div className={styles.div}>{`Let’s Connect `}</div>
              <div className={styles.arrowDiv}>
                <div className={styles.div}>↗</div>
                <div className={styles.div}>↗</div>
              </div>
            </div>
          </div>
          <div className={styles.socialLinksDiv}>
            <div className={styles.socialLinksDiv2}>
              <div className={styles.linkedInDiv}>LinkedIn ↗</div>
              <div className={styles.hrDiv} />
            </div>
            <div className={styles.socialLinksDiv2}>
              <div className={styles.linkedInDiv}>Behance ↗</div>
              <div className={styles.hrDiv} />
            </div>
            <div className={styles.socialLinksDiv2}>
              <div className={styles.linkedInDiv}>Twitter ↗</div>
              <div className={styles.hrDiv} />
            </div>
          </div>
        </div>
      </div>
    );


}

export default Footer;