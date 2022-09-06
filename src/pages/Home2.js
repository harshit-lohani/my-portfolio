import { useCallback } from "react";
import styles from "./Home2.module.css";

const Home2 = () => {
  const onWorkTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='projectListContainer1']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onResumeText1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='resumeContainer1']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGoTopBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.homeDiv}>
      <div className={styles.footerDiv}>
        <div className={styles.footerDetailsDiv}>
          <div className={styles.footerTopDiv}>
            <div className={styles.lookingForSomeOneToJoinA}>
              Looking for some one to join an awesome venture
            </div>
            <div className={styles.letsConnectDiv}>
              <div className={styles.div}>{`Let’s Connect `}</div>
              <div className={styles.arrowDiv}>
                <div className={styles.div}>↗</div>
                <div className={styles.div1}>↗</div>
              </div>
            </div>
          </div>
          <div className={styles.socialLinksDiv}>
            <div className={styles.socialLinksDiv1}>
              <div className={styles.linkedInDiv}>
                <span>{`LinkedIn `}</span>
                <span className={styles.span}>↗</span>
              </div>
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
      <div className={styles.resumeDiv} data-scroll-to="resumeContainer1">
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
                  className={styles.interactionDesignWireframin1}
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
            <div className={styles.frameDiv5}>
              <div className={styles.interactionDesignWireframin}>
                +91 822 4444 222
              </div>
              <div className={styles.emailemailaddresscomDiv}>
                email@emailaddress.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutDiv} data-scroll-to="aboutContainer1">
        <div className={styles.footerDetailsDiv}>
          <div className={styles.hiImJohnDoeUXDesigner}>
            <span>{`Hi, I'm John Doe. `}</span>
            <span className={styles.uXDesignerSpan}>UX Designer</span>
            <span> based in Delhi, India</span>
          </div>
          <div
            className={styles.loremIpsumDolorSitAmetCo2}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit varius massa cursus laoreet suspendisse ac nisl in pulvinar. Auctor integer pellentesque nunc ut at penatibus `}</div>
          <div className={styles.loremIpsumDolorSitAmetCo3}>
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
      <div
        className={styles.projectListDiv}
        data-scroll-to="projectListContainer1"
      >
        <div className={styles.projectDiv}>
          <div className={styles.lineDiv} />
          <div className={styles.footerDetailsDiv}>
            <div className={styles.frameDiv7}>
              <div className={styles.frameDiv8}>
                <div className={styles.div}>Web Development</div>
                <div className={styles.projectSubtiteWillGoHere}>
                  Hospital Management System
                </div>
              </div>
              <div className={styles.movingArrowDiv}>
                <div className={styles.maskGroupDiv}>
                  <div className={styles.rectangleDiv2} />
                </div>
                <div className={styles.maskGroupDiv1}>
                  <div className={styles.rectangleDiv3} />
                </div>
              </div>
            </div>
            <div className={styles.projectImageDiv}>
              <img
                className={styles.addImageHere}
                alt=""
                src="../add-image-here@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.projectDiv}>
          <div className={styles.lineDiv} />
          <div className={styles.footerDetailsDiv}>
            <div className={styles.frameDiv7}>
              <div className={styles.frameDiv8}>
                <div className={styles.div}>Graphic Design</div>
                <div className={styles.projectSubtiteWillGoHere}>
                  2D Game Map of BITS Pilani Campus
                </div>
              </div>
              <div className={styles.movingArrowDiv}>
                <div className={styles.maskGroupDiv}>
                  <div className={styles.rectangleDiv2} />
                </div>
                <div className={styles.maskGroupDiv1}>
                  <div className={styles.rectangleDiv3} />
                </div>
              </div>
            </div>
            <div className={styles.projectImageDiv}>
              <img
                className={styles.addImageHere}
                alt=""
                src="../add-image-here1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.projectDiv}>
          <div className={styles.lineDiv} />
          <div className={styles.footerDetailsDiv}>
            <div className={styles.frameDiv7}>
              <div className={styles.frameDiv8}>
                <div className={styles.div}>{`UI & UX Design`}</div>
                <div className={styles.projectSubtiteWillGoHere}>
                  InfoBITS Mobile App Redesign
                </div>
              </div>
              <div className={styles.movingArrowDiv}>
                <div className={styles.maskGroupDiv}>
                  <div className={styles.rectangleDiv2} />
                </div>
                <div className={styles.maskGroupDiv1}>
                  <div className={styles.rectangleDiv3} />
                </div>
              </div>
            </div>
            <div className={styles.projectImageDiv}>
              <img
                className={styles.addImageHere}
                alt=""
                src="../add-image-here2@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.projectDiv}>
          <div className={styles.lineDiv} />
          <div className={styles.footerDetailsDiv}>
            <div className={styles.frameDiv7}>
              <div className={styles.frameDiv8}>
                <div className={styles.div}>{`UI & UX Design`}</div>
                <div className={styles.projectSubtiteWillGoHere}>
                  Dairy Systems Mobile App
                </div>
              </div>
              <div className={styles.movingArrowDiv}>
                <div className={styles.maskGroupDiv}>
                  <div className={styles.rectangleDiv2} />
                </div>
                <div className={styles.maskGroupDiv1}>
                  <div className={styles.rectangleDiv3} />
                </div>
              </div>
            </div>
            <div className={styles.projectImageDiv}>
              <img
                className={styles.addImageHere}
                alt=""
                src="../add-image-here2@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.projectDiv}>
          <div className={styles.lineDiv} />
          <div className={styles.footerDetailsDiv}>
            <div className={styles.frameDiv7}>
              <div className={styles.frameDiv8}>
                <div className={styles.div}>Front-End Web Development</div>
                <div className={styles.projectSubtiteWillGoHere}>
                  University Website
                </div>
              </div>
              <div className={styles.movingArrowDiv}>
                <div className={styles.maskGroupDiv}>
                  <div className={styles.rectangleDiv2} />
                </div>
                <div className={styles.maskGroupDiv1}>
                  <div className={styles.rectangleDiv3} />
                </div>
              </div>
            </div>
            <div className={styles.projectImageDiv}>
              <img
                className={styles.addImageHere}
                alt=""
                src="../add-image-here2@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.projectDiv}>
          <div className={styles.lineDiv} />
          <div className={styles.footerDetailsDiv}>
            <div className={styles.frameDiv7}>
              <div className={styles.frameDiv8}>
                <div className={styles.div}>Full-Stack Web Development</div>
                <div className={styles.projectSubtiteWillGoHere}>
                  Email Management Website
                </div>
              </div>
              <div className={styles.movingArrowDiv}>
                <div className={styles.maskGroupDiv}>
                  <div className={styles.rectangleDiv2} />
                </div>
                <div className={styles.maskGroupDiv1}>
                  <div className={styles.rectangleDiv3} />
                </div>
              </div>
            </div>
            <div className={styles.projectImageDiv}>
              <img
                className={styles.addImageHere}
                alt=""
                src="../add-image-here2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroDiv}>
        <div className={styles.heoTextDiv}>
          <b className={styles.fullStackWebDevelopment}>
            Full-Stack Web Development
          </b>
          <div className={styles.hospitalManagementSystem}>
            Hospital Management System
          </div>
          <div className={styles.fullStackWebDevelopmentWeb}>
            <span>{`Full-stack web development website built using `}</span>
            <b className={styles.uXDesignerSpan}>SpringBoot, Java</b>
            <span>{` and `}</span>
            <b className={styles.uXDesignerSpan}>MySQL</b>
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
      <div className={styles.navDiv} data-scroll-to="navContainer1">
        <b className={styles.portfolioB}>Portfolio</b>
        <div className={styles.navBarDiv}>
          <div className={styles.workDiv} onClick={onWorkTextClick}>
            Work
          </div>
          <div className={styles.workDiv} onClick={onAboutTextClick}>
            About
          </div>
          <div className={styles.workDiv} onClick={onResumeText1Click}>
            Resume
          </div>
        </div>
      </div>
      <div className={styles.goTopBtn} onClick={onGoTopBtnClick}>
        <div className={styles.movingArrowDiv6}>
          <div className={styles.maskGroupDiv}>
            <div className={styles.rectangleDiv2} />
          </div>
          <div className={styles.maskGroupDiv1}>
            <div className={styles.rectangleDiv3} />
          </div>
        </div>
        <div className={styles.portfolioB}>Go to top</div>
      </div>
    </div>
  );
};

export default Home2;
