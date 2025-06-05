import React, { useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import AOS from 'aos';
import 'aos/dist/aos.css';

import TouchIcons from '../TouchIcons';
import Cover from '../Cover';
import Summary from '../Summary';
import VersionBand from '../VersionBand';
import Footer from '../Footer';
import Resume from '../Resume';
import Skills from '../Skills';
import Timeline from '../Timeline';
import Contact from '../Contact';


import './site.scss';
import './site.fonts.scss';
import './site.animation.scss';



const Site: React.FC = () => {
    var appData = require('../../data/app.json');
    var coverData = require('../../data/cover.json');
    var summaryData = require('../../data/summary.json');
    var skillsData = require('../../data/skills.json');
    var timelineData = require('../../data/timeline.json');
    var resumeData = require('../../data/resume.json');
    var contactData = require('../../data/contact.json');
    var footerData = require('../../data/footer.json');

    useEffect(() => {
      AOS.init();
    }, [appData, coverData, summaryData, skillsData, timelineData, resumeData, contactData, footerData]);

    return <>
      { appData && coverData && summaryData && skillsData && timelineData && resumeData && contactData && footerData &&(
        <>
          <TouchIcons app={appData}/>
          <VersionBand app={appData} />
          <Cover cover={coverData} app={appData} />
          <Summary summary={summaryData} />
          <Skills skills={skillsData} />
          <Timeline timeline={timelineData}  />
          <Resume resume={resumeData} app={appData}/>
          <Contact contact={contactData} app={appData} />
          <Footer footer={footerData} app={appData} />
        </>
      )}
    </>;
};

export default Site;