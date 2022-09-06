import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./Home.module.css";

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
      <div className={styles.footerDiv}>
        <div className={styles.footerDetailsDiv}>
          <div className={styles.footerTopDiv}>
            <div className={styles.lookingForSomeOneToJoinA}>
              Looking for some one to join an awesome venture
            </div>
            <div className={styles.letsConnectDiv}>
              <div className={styles.projectTitleDiv}>{`Let's Connect `}</div>
              <div className={styles.arrowDiv}>
                <textarea className={styles.textarea}>↗</textarea>
                <input className={styles.input} type="checkbox">
                  ↗
                </input>
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
              <textarea className={styles.hrTextarea} />
            </div>
            <div className={styles.socialLinksDiv2}>
              <div className={styles.linkedInDiv}>Twitter ↗</div>
              <textarea className={styles.hrTextarea} />
            </div>
          </div>
        </div>
      </div>
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
      <div className={styles.aboutDiv} data-scroll-to="aboutContainer">
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
        data-scroll-to="projectListContainer"
      >
        <div className={styles.projectDiv}>
          <div className={styles.lineDiv} />
          <div className={styles.footerDetailsDiv}>
            <div className={styles.frameDiv6}>
              <div className={styles.frameDiv7}>
                <div className={styles.projectTitleDiv}>Web Development</div>
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
            <div className={styles.frameDiv6}>
              <div className={styles.frameDiv7}>
                <div className={styles.projectTitleDiv}>Graphic Design</div>
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
            <div className={styles.frameDiv6}>
              <div className={styles.frameDiv7}>
                <div className={styles.projectTitleDiv}>{`UI & UX Design`}</div>
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
            <div className={styles.frameDiv6}>
              <div className={styles.frameDiv7}>
                <div className={styles.projectTitleDiv}>{`UI & UX Design`}</div>
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
            <div className={styles.frameDiv6}>
              <div className={styles.frameDiv7}>
                <div className={styles.projectTitleDiv}>
                  Front-End Web Development
                </div>
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
            <div className={styles.frameDiv6}>
              <div className={styles.frameDiv7}>
                <div className={styles.projectTitleDiv}>
                  Full-Stack Web Development
                </div>
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
          <div className={styles.hiImHarshitLohaniSoftwa}>
            <p className={styles.hiImHarshitLohani}>
              <span>Hi, I'm Harshit Lohani.</span>
            </p>
            <p className={styles.softwareDeveloperAndUXDesi}>
              <b>{`Software Developer `}</b>
              <span className={styles.andSpan}>and</span>
              <b className={styles.uXDesignerB}> UX Designer</b>
              <span className={styles.andSpan}>{` `}</span>
            </p>
          </div>
          <div className={styles.projectSubtiteWillGoHere}>
            <p className={styles.hiImHarshitLohani}>
              <span>{`Software Developer Intern at `}</span>
              <b className={styles.ciscoB}>{`Cisco `}</b>
              <span className={styles.ciscoB}>and</span>
              <b className={styles.ciscoB}> Hexacorp</b>
            </p>
            <p className={styles.wireframeStoryBoarding}>
              <span>{`UI and UX Designer at `}</span>
              <b className={styles.ciscoB}>Dairy Systems</b>
              <span className={styles.ciscoB}>{` `}</span>
            </p>
          </div>
        </div>
        <Button variant="primary">My Resume ↗</Button>
      </div>
      <nav
        className={styles.nav}
        id="nav-container"
        data-scroll-to="navContainer"
      >
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
      </nav>
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
    </div>
  );
};

export default Home;
