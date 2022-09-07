import styles from "./ProjectShowcase.module.css";
import Footer from "../components/Footer";
import ProjectHero from "../components/ProjectHeroImage";
import ProjectHeroText from "../components/ProjectHeroText";
import Navbar from "../components/Navbar";
import ProjectImage from "../components/ProjectImage";
import LineDiv from "../components/LineDiv";

const ProjectShowcase = () => {
  
  const path = "../add-image-here14@2x.png"

  return (
    <div className={styles.homeDiv}>
      <Navbar/>
      <ProjectHero />      
      <ProjectHeroText />
      <LineDiv /> 
      <div className={styles.imageSection}>      
        <ProjectImage path={path}/>
        <ProjectImage path={path}/>
        <ProjectImage path={path}/>
        <ProjectImage path={path}/>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectShowcase;
