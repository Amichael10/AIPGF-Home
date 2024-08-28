import { memo } from "react";
import PropTypes from "prop-types";
import styles from "./container.module.css";

const Container = memo(({ className = "" }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.container1}>
        <div className={styles.backgroundborder}>
          <div className={styles.container2}>
            <img className={styles.svgIcon} alt="" src="/svg-1.svg" />
          </div>
          <input
            className={styles.theMostInnovative}
            placeholder="The most innovative suite of AI-powered funding solutions."
            type="text"
          />
        </div>
        <div className={styles.container3}>
          <div className={styles.container4}>
            <div className={styles.heading1}>
              <h1 className={styles.aiPowered}>{`AI Powered/ `}</h1>
              <b className={styles.publicGoodsFunding}>Public Goods Funding</b>
            </div>
          </div>
          <div className={styles.container5}>
            <div className={styles.heading2}>
              <div className={styles.aiPgfAProactive}>
                AI-PGF: A Proactive Grants Program and Movement to Build towards
                a Funding AGI
              </div>
            </div>
            <div className={styles.container6}>
              <div className={styles.container7}>
                <div className={styles.link}>
                  <img
                    className={styles.tokennearProtocolIcon}
                    loading="lazy"
                    alt=""
                    src="/tokennearprotocol.svg"
                  />
                </div>
                <img
                  className={styles.mingcutetextboxAiLineIcon}
                  loading="lazy"
                  alt=""
                  src="/mingcutetextboxailine.svg"
                />
                <img
                  className={styles.mingcutetextboxAiLineIcon}
                  alt=""
                  src="/hugeiconsainetwork.svg"
                />
              </div>
            </div>
            <div className={styles.container8}>
              <div className={styles.buttonParent}>
                <button className={styles.button}>
                  <div className={styles.border} />
                  <div className={styles.container9}>
                    <a
                      className={styles.getFunded}
                      href="https://forum.aipgf.com"
                      target="_blank"
                    >
                      Get funded
                    </a>
                  </div>
                </button>
                <button className={styles.button1}>
                  <div className={styles.border1} />
                  <div className={styles.container10}>
                    <a
                      className={styles.learnMore}
                      href="https://potlock.notion.site/What-AI-PGF-Actually-Looks-Like-dc04c784b11e474aacb6e0f27f91cb40?pvs=4"
                      target="_blank"
                    >
                      Learn More
                    </a>
                  </div>
                </button>
              </div>
            </div>
            <div className={styles.container11}>
              <div className={styles.memojis}>
                <img
                  className={styles.memojiMale02}
                  alt=""
                  src="/memoji--male-02@2x.png"
                />
                <img
                  className={styles.memojiMale03}
                  alt=""
                  src="/memoji--male-03@2x.png"
                />
                <img
                  className={styles.memojiMale04}
                  alt=""
                  src="/memoji--male-04@2x.png"
                />
                <img
                  className={styles.memojiMale09}
                  alt=""
                  src="/memoji--male-09@2x.png"
                />
                <img
                  className={styles.memojiMale10}
                  alt=""
                  src="/memoji--male-10@2x.png"
                />
                <img
                  className={styles.memojiMale11}
                  loading="lazy"
                  alt=""
                  src="/memoji--male-11@2x.png"
                />
              </div>
              <div className={styles.margin}>
                <div className={styles.container12}>
                  <img
                    className={styles.svgIcon1}
                    loading="lazy"
                    alt=""
                    src="/svg-2.svg"
                  />
                  <div className={styles.link}>
                    <div className={styles.projectsAreLaunchingContainer}>
                      <b>965</b>
                      <span> Projects are launching faster</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
