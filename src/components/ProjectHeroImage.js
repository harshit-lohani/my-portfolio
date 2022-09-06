import { useCallback } from "react";
import styles from "./ProjectHeroImage.module.css"

const ProjectHero = () => {

    return (
        <div className={styles.projectImageDiv}>
        <img
          className={styles.addImageHere}
          alt=""
          src="../add-image-here12@2x.png"
        />
      </div>

    );


}

export default ProjectHero;