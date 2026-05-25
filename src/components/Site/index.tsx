import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import AOS from "aos";
import "aos/dist/aos.css";

import TouchIcons from "../TouchIcons";
import Cover from "../Cover";
import Summary from "../Summary";
import VersionBand from "../VersionBand";
import Footer from "../Footer";
import Resume from "../Resume";
import Skills from "../Skills";
import Timeline from "../Timeline";
import Contact from "../Contact";

import "./site.scss";
import "./site.fonts.scss";
import "./site.animation.scss";

import appData from "../../data/app.json";
import coverData from "../../data/cover.json";
import summaryData from "../../data/summary.json";
import skillsData from "../../data/skills.json";
import timelineData from "../../data/timeline.json";
import resumeData from "../../data/resume.json";
import contactData from "../../data/contact.json";
import footerData from "../../data/footer.json";

const Site: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, [
    appData,
    coverData,
    summaryData,
    skillsData,
    timelineData,
    resumeData,
    contactData,
    footerData,
  ]);

  return (
    <>
      {appData &&
        coverData &&
        summaryData &&
        skillsData &&
        timelineData &&
        resumeData &&
        contactData &&
        footerData && (
          <>
            <TouchIcons app={appData} />
            <VersionBand app={appData} />
            <Cover cover={coverData} app={appData} />
            <Summary summary={summaryData} />
            <Skills skills={skillsData} />
            <Timeline timeline={timelineData} />
            <Resume resume={resumeData} app={appData} />
            <Contact contact={contactData} app={appData} />
            <Footer footer={footerData} app={appData} />
          </>
        )}
    </>
  );
};

export default Site;
