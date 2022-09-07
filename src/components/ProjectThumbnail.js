import styles from "./ProjectThumbnail.module.css"
import LineDiv from "./LineDiv"
import ProjectImage from "./ProjectImage"

const ProjectThumbnail = () => {

    return (
        <div className={styles.projectDiv}>
            <LineDiv />
            <div className={styles.projectDetailsDiv}>
                <div className={styles.projectDetailsText}>
                    <div className={styles.frameDiv7}>
                        <div className={styles.projectSubtitleDiv}>Web Development</div>
                        <div className={styles.projectTitleDiv}>Hospital Management System</div>
                    </div>

                    <div className={styles.arrowDiv}>
                        <img
                            className={styles.arrow}
                            src="../arrow.png"
                            alt="Arrow PNG"
                        />
                    </div>
                </div>
                
                <ProjectImage path = "../add-image-here@2x.png"/>
            </div>
        </div>
    );
}

export default ProjectThumbnail