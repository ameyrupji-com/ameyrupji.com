import React, { useState, useRef, useEffect } from 'react';

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";


import './footer.scss';
import './footer.color.scss';

interface FooterProps {
    footer: {
        'site-links': { href: string; text: string }[];
    };
    app: {
        'other-links': { href: string; text: string; 'img-src'?: string }[];
        'license-link': { href: string; id: string; text: string };
        policy_links: { href: string; id: string; text: string }[];
        'old-versions': { href: string; text: string }[];
        'active-version': string;
        app_url: string;
    };
}

const Footer: React.FC<FooterProps> = ({ footer, app }) => {
    const [oldVersionDropdownOpen, setOldVersionDropdownOpen] = useState(false);
    const dropdownContainerRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: { target: any; }) => {
        if (dropdownContainerRef.current && !dropdownContainerRef.current.contains(event.target)) {
            setOldVersionDropdownOpen(false);
        }
    };

    const smoothScroll = (target: string) => {
        const element = document.querySelector(target);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <footer className="container-fluid" id="footer-main">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 col-xl-3 col-6">
                        <ul className="footer-no-icons-list">
                            <li className="list-heading">Site <span className="list-heading-strong">Links</span></li>
                            {footer['site-links'].map((link, index) => (
                                <li key={index}><a onClick={(event: React.SyntheticEvent) => {event.preventDefault(); smoothScroll(link.href)}}>{link.text}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 col-6">
                        <ul className="footer-no-icons-list">
                            <li className="list-heading">Other <span className="list-heading-strong">Links</span></li>
                            {app['other-links'].map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>
                                        {link.text}
                                        {link['img-src'] && <img src={link['img-src']} alt="" />}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 col-6">
                        <ul className="footer-no-icons-list">
                            <li className="list-heading">Share <span className="list-heading-strong">website</span></li>
                            <li>
                                <LinkedinShareButton url={app.app_url}>
                                    <div className="share-btn btn-link">
                                        <LinkedinIcon size={16} round={false} />
                                        <span>Linkedin</span>
                                    </div>
                                </LinkedinShareButton>
                            </li>
                            <li>
                                <FacebookShareButton url={app.app_url}>
                                    <div className="share-btn btn-link">
                                        <FacebookIcon size={16} round={false} />
                                        <span>Facebook</span>
                                    </div>
                                </FacebookShareButton>
                            </li>
                            <li>
                                <TwitterShareButton url={app.app_url}>
                                    <div className="share-btn btn-link">
                                        <XIcon size={16} round={false} />
                                        <span>X</span>
                                    </div>
                                </TwitterShareButton>
                            </li>
                            <li>
                                <RedditShareButton url={app.app_url}>
                                    <div className="share-btn btn-link">
                                        <RedditIcon size={16} round={false} />
                                        <span>Reddit</span>
                                    </div>
                                </RedditShareButton>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 col-6">
                        <ul className="footer-no-icons-list">
                            <li className="list-heading">Website <span className="list-heading-strong">License</span></li>
                            <li>The code of this website is Open Sourced. This website is protected under GNU General Public License.</li>
                            <li>&nbsp;</li>
                            <li><a href={app['license-link'].href} id={app['license-link'].id}>{app['license-link'].text}
                                <span id={`${app['license-link'].id}-span`}></span></a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-xl-12 col-12">
                        <ul className="footer-no-icons-flat-list">
                            {app.policy_links.map((link, index) => (
                                <li key={index}><a href={link.href} id={link.id}>{link.text} <span id={`${link.id}-span`}></span></a></li>
                            ))}
                            {app['old-versions'].length ? (
                                <div className="btn-group dropup" id="versions" ref={dropdownContainerRef}>
                                    {oldVersionDropdownOpen && (
                                        <div className="dropdown-menu show" x-placement="top-start" style={{ top: 'auto', left: 'auto', transform: 'translate3d(0px, -100%, 0px)' }}>
                                            <h6 className="dropdown-header">Older Versions:</h6>
                                            {app['old-versions'].map((version, index) => (
                                                <a key={index} className="dropdown-item old-version-links"
                                                    href={`${app.app_url}${version.href}`}>{version.text}</a>
                                            ))}
                                        </div>
                                    )}
                                    <button type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false" onClick={() => setOldVersionDropdownOpen(!oldVersionDropdownOpen)}>
                                        <span><i className="fas fa-info-circle" data-toggle="tooltip" data-placement="top"
                                            title="Version selection will only work form the latest version. Please come back here to select and view different old version of this site."></i>
                                            {` `}Version: {app['active-version']}</span>
                                    </button>
                                    
                                </div>
                            ) : (
                                <li><a href="#image-back-main" id={app['active-version']}>Version: {app['active-version']} <span
                                    id={`${app['active-version']}-span`}></span></a></li>
                            )}
                        </ul>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;