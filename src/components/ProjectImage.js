import styles from "./ProjectImage.module.css"

const ProjectImage = (props) => {

    const path = props.path;
    const alt = props.alt;

    return (
        <div className={styles.imageHolder}>
            <img
                className={styles.addImageHere}
                alt={alt}
                src={path}
            />
        </div>
    );


}

export default ProjectImage