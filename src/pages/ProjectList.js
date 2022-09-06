import styles from "./ProjectList.module.css";

const ProjectList = () => {
  return (
    <div
      className={styles.projectListDiv}
      data-scroll-to="projectListContainer"
    >
      <div className={styles.projectDiv}>
        <div className={styles.lineDiv} />
        <div className={styles.frameDiv}>
          <div className={styles.frameDiv1}>
            <div className={styles.frameDiv2}>
              <div className={styles.projectTitleDiv}>Web Development</div>
              <div className={styles.projectSubtiteWillGoHere}>
                Hospital Management System
              </div>
            </div>
            <div className={styles.movingArrowDiv}>
              <div className={styles.maskGroupDiv}>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.maskGroupDiv1}>
                <div className={styles.rectangleDiv1} />
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
        <div className={styles.frameDiv}>
          <div className={styles.frameDiv1}>
            <div className={styles.frameDiv2}>
              <div className={styles.projectTitleDiv}>Graphic Design</div>
              <div className={styles.projectSubtiteWillGoHere}>
                2D Game Map of BITS Pilani Campus
              </div>
            </div>
            <div className={styles.movingArrowDiv}>
              <div className={styles.maskGroupDiv}>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.maskGroupDiv1}>
                <div className={styles.rectangleDiv1} />
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
        <div className={styles.frameDiv}>
          <div className={styles.frameDiv1}>
            <div className={styles.frameDiv2}>
              <div className={styles.projectTitleDiv}>{`UI & UX Design`}</div>
              <div className={styles.projectSubtiteWillGoHere}>
                InfoBITS Mobile App Redesign
              </div>
            </div>
            <div className={styles.movingArrowDiv}>
              <div className={styles.maskGroupDiv}>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.maskGroupDiv1}>
                <div className={styles.rectangleDiv1} />
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
        <div className={styles.frameDiv}>
          <div className={styles.frameDiv1}>
            <div className={styles.frameDiv2}>
              <div className={styles.projectTitleDiv}>{`UI & UX Design`}</div>
              <div className={styles.projectSubtiteWillGoHere}>
                Dairy Systems Mobile App
              </div>
            </div>
            <div className={styles.movingArrowDiv}>
              <div className={styles.maskGroupDiv}>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.maskGroupDiv1}>
                <div className={styles.rectangleDiv1} />
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
        <div className={styles.frameDiv}>
          <div className={styles.frameDiv1}>
            <div className={styles.frameDiv2}>
              <div className={styles.projectTitleDiv}>
                Front-End Web Development
              </div>
              <div className={styles.projectSubtiteWillGoHere}>
                University Website
              </div>
            </div>
            <div className={styles.movingArrowDiv}>
              <div className={styles.maskGroupDiv}>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.maskGroupDiv1}>
                <div className={styles.rectangleDiv1} />
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
        <div className={styles.frameDiv}>
          <div className={styles.frameDiv1}>
            <div className={styles.frameDiv2}>
              <div className={styles.projectTitleDiv}>
                Full-Stack Web Development
              </div>
              <div className={styles.projectSubtiteWillGoHere}>
                Email Management Website
              </div>
            </div>
            <div className={styles.movingArrowDiv}>
              <div className={styles.maskGroupDiv}>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.maskGroupDiv1}>
                <div className={styles.rectangleDiv1} />
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
  );
};

export default ProjectList;
