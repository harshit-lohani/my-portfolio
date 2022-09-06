import styles from "./ProjectHeroText.module.css"

const ProjectHeroText = () => {

    return (
        <div className={styles.heroDiv}>
            <div className={styles.heroTextDiv}>
                <b className={styles.fullStackWebDevelopment}>
                    Full-Stack Web Development
                </b>
                <div className={styles.hospitalManagementSystem}>
                    Hospital Management System
                </div>
                <div className={styles.fullStackWebDevelopmentWeb}>
                    <span>{`Full-stack web development website built using `}</span>
                    <b className={styles.springBootJava}>SpringBoot, Java</b>
                    <span>{` and `}</span>
                    <b className={styles.springBootJava}>MySQL</b>
                    <span>
                        . The project aims to provide all CRUD functionalities, based upon
                        the user’s role. The website supports multiple user roles, doctor,
                        receptionist and admin.
                    </span>
                </div>
                <b className={styles.linkedInDiv}>
                    Java, SpringBoot, Thymeleaf, Bootstrap CSS, MySQL
                </b>
            </div>
            <div className={styles.cTAButtonDiv}>
                <div className={styles.linkedInDiv}>
                    <span>{`GitHub `}</span>
                    <span className={styles.span}>↗</span>
                </div>
            </div>
        </div>

    );

}


export default ProjectHeroText