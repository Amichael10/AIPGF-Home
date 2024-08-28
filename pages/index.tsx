import { useCallback } from "react";
import NavBar from "../components/nav-bar";
import Container from "../components/container";
import Eligibiltyassesment from "../components/eligibiltyassesment";
import PotLock from "../components/pot-lock";
import NEARFoundation from "../components/n-e-a-r-foundation";
import GrantPortals from "../components/grant-portals";
import Button1 from "../components/button1";
import ProjectList from "../components/project-list";
import ProposalSteps from "../components/proposal-steps";
import FrameComponent9 from "../components/frame-component9";
import Container1 from "../components/container1";
import Footer from "../components/footer";
import styles from "./index.module.css";

const Homepage = () => {
  const onWhiteLogo56effa5f1ImageClick = useCallback(() => {
    window.open("https://masa.ai");
  }, []);

  const onGTCIconContainerClick = useCallback(() => {
    window.open("https://gitcoin.co");
  }, []);

  return (
    <div className={styles.index1}>
      <NavBar />
      <main className={styles.headerContainerWrapper}>
        <section className={styles.headerContainer}>
          <Container />
          <Eligibiltyassesment />
          <div className={styles.buildingWithTheBestParent}>
            <h1 className={styles.buildingWithThe}>Building with the Best</h1>
            <div className={styles.partnersListWrapper}>
              <div className={styles.partnersList}>
                <div className={styles.potlockWrapper}>
                  <PotLock />
                </div>
                <NEARFoundation />
                <div className={styles.whiteLogo56effa5f1Wrapper}>
                  <img
                    className={styles.whiteLogo56effa5f1Icon}
                    loading="lazy"
                    alt=""
                    src="/white-logo56effa5f-1@2x.png"
                    onClick={onWhiteLogo56effa5f1ImageClick}
                  />
                </div>
                <div className={styles.gTCIconContainerWrapper}>
                  <div
                    className={styles.gTCIconContainer}
                    onClick={onGTCIconContainerClick}
                  >
                    <img
                      className={styles.c2b9f9cb98d610d7661e6GtcIcon}
                      loading="lazy"
                      alt=""
                      src="/642c2b9f9cb98d610d7661e6-gtciconlight-1.svg"
                    />
                    <div className={styles.c5d029c6bb20c5f00bf8GtcLogotWrapper}>
                      <img
                        className={styles.c5d029c6bb20c5f00bf8GtcLogotIcon}
                        loading="lazy"
                        alt=""
                        src="/6433c5d029c6bb20c5f00bf8-gtclogotypedark-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.headingSubheadingWrapper}>
            <div className={styles.headingSubheading}>
              <div className={styles.whatIsAiPgfWrapper}>
                <h1 className={styles.whatIsAiPgf}>What is AI-PGF</h1>
              </div>
              <h2 className={styles.wereRedefiningGrant}>
                we're redefining grant funding by leveraging AI to streamline
                workflows, reduce overhead, and ensure promising projects
                receive timely support.
              </h2>
            </div>
          </div>
          <GrantPortals />
          <div className={styles.headerWrapper}>
            <div className={styles.header}>
              <div className={styles.container}>
                <div className={styles.frameParent}>
                  <div className={styles.activeRfpsParent}>
                    <h1 className={styles.activeRfps}>Active RFPs</h1>
                    <h2 className={styles.discoverFundingOpportunities}>
                      Discover funding opportunities currently available for
                      innovative projects.
                    </h2>
                  </div>
                  <Button1
                    propPadding="11px 40px"
                    cancel="View All"
                    propMinWidth="88px"
                    propTextDecoration="underline"
                    cancelWidth="unset"
                  />
                </div>
              </div>
            </div>
          </div>
          <ProjectList />
          <div className={styles.headerFrame}>
            <div className={styles.header}>
              <div className={styles.container}>
                <div className={styles.frameParent}>
                  <div className={styles.activeRfpsParent}>
                    <h1 className={styles.activeRfps}>Apply for Grant</h1>
                    <h2 className={styles.discoverFundingOpportunities}>
                      Building at the intersection of funding, Web3, and AI?
                      Apply for a grant through our on-chain portal to build
                      open source today!
                    </h2>
                  </div>
                  <Button1
                    propPadding="11px 23px"
                    cancel="Apply Now"
                    propMinWidth="123px"
                    propTextDecoration="unset"
                    cancelWidth="unset"
                  />
                </div>
              </div>
            </div>
          </div>
          <ProposalSteps />
          <div className={styles.headerFrame}>
            <div className={styles.header2}>
              <div className={styles.container}>
                <div className={styles.frameParent}>
                  <div className={styles.fundingGrantParent}>
                    <h1 className={styles.activeRfps}>Funding Grant</h1>
                    <h2
                      className={styles.exploreFundingAgents}
                    >{`Explore   funding agents designed to streamline grant workflows `}</h2>
                  </div>
                  <Button1 cancel="Explore" />
                </div>
              </div>
            </div>
          </div>
          <FrameComponent9 />
          <div className={styles.headerParent}>
            <div className={styles.header3}>
              <div className={styles.container}>
                <div className={styles.fAQTitleContainer}>
                  <div className={styles.fAQTitleContent}>
                    <h1 className={styles.whatIsAiPgf}>
                      Frequently Asked Question
                    </h1>
                  </div>
                  <div className={styles.button}>
                    <div className={styles.cancel}>Explore</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.fAQContent}>
              <div className={styles.faqItems}>
                <div className={styles.question01}>
                  <div className={styles.closedSourceAnswer}>
                    <h1 className={styles.whatIfIm}>
                      What if I’m building closed source?
                    </h1>
                    <div className={styles.weAreOnly}>
                      We are only funding open source builders.
                    </div>
                  </div>
                  <img
                    className={styles.minusIcon}
                    loading="lazy"
                    alt=""
                    src="/minus.svg"
                  />
                </div>
                <div className={styles.container4}>
                  <div className={styles.question03}>
                    <h1 className={styles.doINeed}>
                      Do I need to build on NEAR?
                    </h1>
                    <img
                      className={styles.minusIcon}
                      loading="lazy"
                      alt=""
                      src="/plus-4.svg"
                    />
                  </div>
                  <div className={styles.question5}>
                    <h1 className={styles.canISubmit}>
                      Can I submit an existing product?
                    </h1>
                    <img
                      className={styles.minusIcon}
                      loading="lazy"
                      alt=""
                      src="/plus-4.svg"
                    />
                  </div>
                  <div className={styles.question5}>
                    <h1 className={styles.canISubmit}>
                      What if I’m just building open source AI?
                    </h1>
                    <img
                      className={styles.minusIcon}
                      loading="lazy"
                      alt=""
                      src="/plus-4.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.container5}>
                <div className={styles.question031}>
                  <h1 className={styles.canISubmit}>
                    How much funds are you giving to builders?
                  </h1>
                  <img
                    className={styles.minusIcon}
                    loading="lazy"
                    alt=""
                    src="/plus-4.svg"
                  />
                </div>
                <div className={styles.question51}>
                  <h1 className={styles.canISubmit}>
                    Where can I get feedback for my proposal?
                  </h1>
                  <img className={styles.minusIcon} alt="" src="/plus-4.svg" />
                </div>
                <div className={styles.question5}>
                  <h1 className={styles.canISubmit}>
                    Where can I get ideas to build?
                  </h1>
                  <img className={styles.minusIcon} alt="" src="/plus-4.svg" />
                </div>
                <div className={styles.question5}>
                  <h1 className={styles.canISubmit}>
                    Where can I get ideas to build?
                  </h1>
                  <img className={styles.minusIcon} alt="" src="/plus-4.svg" />
                </div>
              </div>
            </div>
          </div>
          <Container1 />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
