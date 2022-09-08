import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Home.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import LineDiv from "../components/LineDiv";
import ProjectThumbnail from "../components/ProjectThumbnail";
import AboutDiv from "../components/AboutDiv";

const Home = () => {
  const onWorkTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='projectListContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onResumeText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='resumeContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGoTopBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.homeDiv}>
      
      <Navbar />
      <HomeHero />

      
      <div className={styles.resumeDiv} data-scroll-to="resumeContainer">
        <div className={styles.titleDiv}>
          <b className={styles.linkedInDiv}>Resume</b>
          <div className={styles.cTAButtonDiv}>
            <div className={styles.linkedInDiv}>
              <span>{`PDF `}</span>
              <span className={styles.span}>↗</span>
            </div>
          </div>
        </div>
        <div className={styles.resumeDiv1}>
          <div className={styles.experienceDiv}>
            <div className={styles.googleDiv}>Experience</div>
            <div className={styles.autoLayoutDiv}>
              <div className={styles.frameDiv}>
                <div className={styles.socialLinksDiv2}>
                  <div className={styles.googleDiv}>Google</div>
                  <div className={styles.uXDesignIntern}>UX Design Intern</div>
                </div>
                <div className={styles.uXDesignIntern}>May 2022 - Present</div>
              </div>
              <div
                className={styles.loremIpsumDolorSitAmetCo}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sed ac orci, et in. Massa egestas eu, augue eget lorem ullamcorper blandit. Dui, semper elementum volutpat non vulputate ultrices sed. `}</div>
            </div>
          </div>
          <div className={styles.experienceDiv}>
            <div className={styles.googleDiv}>Education</div>
            <div className={styles.autoLayoutDiv}>
              <div className={styles.frameDiv2}>
                <div className={styles.frameDiv3}>
                  <div className={styles.googleDiv}>{`Univesity Name `}</div>
                  <div className={styles.uXDesignIntern}>Course Take</div>
                </div>
                <div className={styles.uXDesignIntern}>May 2022 - Present</div>
              </div>
              <div
                className={styles.loremIpsumDolorSitAmetCo}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sed ac orci, et in. Massa egestas eu, augue eget lorem ullamcorper blandit. Dui, semper elementum volutpat non vulputate ultrices sed. `}</div>
            </div>
          </div>
          <div className={styles.experienceDiv}>
            <div className={styles.googleDiv}>Skills</div>
            <div className={styles.educationDiv2}>
              <div className={styles.interactionDesignWireframin}>
                <p
                  className={styles.hiImHarshitLohani}
                >{`Interaction Design, Wireframing, Copywriting, User Research, `}</p>
                <p className={styles.wireframeStoryBoarding}>
                  Wireframe, Story boarding
                </p>
              </div>
            </div>
          </div>
          <div className={styles.experienceDiv}>
            <div className={styles.googleDiv}>Tools</div>
            <div className={styles.educationDiv2}>
              <div className={styles.interactionDesignWireframin}>
                Sketch, Figma, Photoshop, Invsion, ProtoPie
              </div>
            </div>
          </div>
          <div className={styles.experienceDiv}>
            <div className={styles.googleDiv}>Contact</div>
            <input
              className={styles.frameInput}
              type="text"
              defaultValue="email@emailaddress.com"
              placeholder="+91 822 4444 222"
            />
          </div>
        </div>
      </div>



      <div className={styles.projectListDiv} data-scroll-to="projectListContainer">
          <ProjectThumbnail />
          <ProjectThumbnail />
          <ProjectThumbnail />
          <ProjectThumbnail />

      </div>

      <AboutDiv />

      <button className={styles.goTopBtn} onClick={onGoTopBtnClick}>
        <div className={styles.movingArrowDiv6}>
          <div className={styles.maskGroupDiv}>
            <div className={styles.rectangleDiv2} />
          </div>
          <div className={styles.maskGroupDiv1}>
            <div className={styles.rectangleDiv3} />
          </div>
        </div>
        <div className={styles.goToTop}>Go to top</div>
      </button>


      <Footer />

    </div>
  );
};

export default Home;
