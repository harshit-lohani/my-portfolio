import styles from "./AboutDiv.module.css"

const AboutDiv = () => {
    

    return (
        <div className={styles.aboutDiv} data-scroll-to="aboutContainer">
            <div className={styles.aboutDivInfo}>
                <div className={styles.aboutDivHeading}>
                    <span>{`Hi, I'm Harshit Lohani. `}</span>
                    <span className={styles.blue}>UX Designer</span>
                    <span> and </span>
                    <span className={styles.blue}> Developer </span>
                    <span> based in India</span>
                </div>
                <div className={styles.aboutDivText}>
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit varius massa cursus laoreet suspendisse ac nisl in pulvinar. Auctor integer pellentesque nunc ut at penatibus `}
                </div>
                <div className={styles.aboutDivText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
                    varius massa cursus laoreet suspendisse ac nisl in pulvinar. Auctor
                    integer pellentesque nunc ut at penatibus viverra risus nisl. Sapien
                    nibh interdum tellus sapien et tortor, commodo. Dolor urna pharetra,
                    nulla et morbi sed ornare. Sed condimentum urna pharetra id in enim
                    nunc. Mi ut etiam vel.
                </div>
            </div>


        <div className={styles.photoDiv}>
            <div className={styles.rectangleDiv} />
            <div className={styles.rectangleDiv1} />
            <img
                className={styles.rectangleIcon}
                alt=""
                src="../rectangle-7@2x.png"
            />
            </div>
        </div>

    );
}

export default AboutDiv