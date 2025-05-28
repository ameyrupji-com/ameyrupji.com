import React, { useEffect, useState } from 'react';

import './cover.scss';
import './cover.color.scss';
import './cover.navbar.scss';
import './cover.navbar.color.scss';
import './scroll.scss';


interface CoverProps {
    cover: {
        'first-name': string;
        'last-name': string;
        links: { href: string; text: string }[];
        'scroll-link': string;
    };
    app: {
        'other-links': { href: string; text: string; 'img-src'?: string }[];
        href: string;
        'active-version': string;
    };
}

const Cover: React.FC<CoverProps> = ({ cover, app }): JSX.Element => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const scrollFunction = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;

        const navbar = document.querySelector(`.navbar`);

        if (navbar) {
            if (scrollTop > 70 && scrollTop < (windowHeight - 200)) {
                navbar.classList.remove('bg-transparent', 'nav-scrolled-vh');
                navbar.classList.add('nav-scrolled-20');
            } else if (scrollTop > (windowHeight - 200)) {
                navbar.classList.remove('bg-transparent');
                navbar.classList.add('nav-scrolled-20', 'nav-scrolled-vh');
            } else {
                navbar.classList.add('bg-transparent');
                navbar.classList.remove('nav-scrolled-20', 'nav-scrolled-vh');
            }
        }
    };

    const initializeFixedNavBarOnScroll = () => {
        window.onscroll = scrollFunction;
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
        initializeFixedNavBarOnScroll();
    }, []);

    return (
        <div className="container-full-bg" id="image-back-main">
            <div className="jumbotron" id="gradient-main">
                <nav className={`${isNavCollapsed ? '' : 'navbar-open'} navbar navbar-expand-sm navbar-light bg-transparent fixed-top`}>
                    <div className="container" data-aos="fade-down">
                        <a className="navbar-brand" href="#summary-main">
                            {cover['first-name']} <span id="navbar-brand-alternate">{cover['last-name']}</span>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-menu" onClick={handleNavCollapse} aria-expanded={!isNavCollapsed ? true : false}>
                            <div id="burger">
                                <div className="bar top"></div>
                                <div className="bar bottom"></div>
                            </div>
                        </button>
                        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbar-collapse-menu">
                            <ul className="navbar-nav ml-auto">
                                {cover.links.map((link, index) => (
                                    <li className="nav-item" key={index}>
                                        <a onClick={(event: React.SyntheticEvent) => {event.preventDefault(); smoothScroll(link.href)}} className="nav-link" data-toggle="collapse" data-target="#navbar-collapse-menu">
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <hr className="d-block d-md-none d-lg-none d-xl-none" />
                            <ul className="navbar-nav ml-auto d-block d-md-none d-lg-none d-xl-none">
                                {app['other-links'].map((link, index) => (
                                    <li className="nav-item" key={index}>
                                        <a href={link.href} className="nav-link" data-toggle="collapse" data-target="#navbar-collapse-menu">
                                            {link.text}
                                            {link['img-src'] && <img src={link['img-src']} alt="" />} &nbsp;
                                            <i className="fas fa-external-link-alt"></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <hr className="d-block d-md-none d-lg-none d-xl-none" />
                            <ul className="navbar-nav ml-auto d-block d-md-none d-lg-none d-xl-none">
                                <li className="nav-item">
                                    <a href={app.href} className="nav-link" data-toggle="collapse" data-target="#navbar-collapse-menu">
                                        Version: <span id="release-number-span" style={{ textTransform: 'lowercase' }}>{app['active-version']}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div id="jumbotron-content" data-aos="fade-up">
                    <h1 className="title">
                        Amey <span className="title-strong">Rupji</span>
                    </h1>
                    <h3 className="title">
                        Software <span className="title-strong">Engineer</span> <span className="title-hollow">Artist</span>
                    </h3>
                </div>
            </div>
            <div className="scroll-container">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <div>
                    <a href={cover['scroll-link']}>
                        <span className="unu"></span>
                        <span className="doi"></span>
                        <span className="trei"></span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Cover;
