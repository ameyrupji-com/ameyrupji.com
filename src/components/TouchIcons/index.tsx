import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
    "app_name": string;
    "env": string;
    "icons_folder": string;
}

const TouchIcons = ({ app }: { app: AppProps }) => {
    return ReactDOM.createPortal(
        <>
            <title>{app["app_name"]}</title>
            <meta name="application-name" content={app["app_name"]}/>
            <meta name="description" content={app["app_name"]} />
            <meta name="og:title" property="og:title" content={app["app_name"]} />
            
            <meta name="theme-color" content="#bd8d4be6" media="(prefers-color-scheme: light)" />
            <meta name="theme-color" content="#845007e6" media="(prefers-color-scheme: dark)" />

            <meta name="apple-mobile-web-app-capable" content="yes"></meta>
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="apple-mobile-web-app-title" content={app["app_name"]} />
            <meta name="apple-mobile-web-app-capable" content="yes" />

            <meta name="msapplication-TileColor" content="#845007" />
            <meta name="msapplication-tooltip" content={app["app_name"]} />

            <link rel="icon" type="image/png" href={`./images/`+app["icons_folder"]+`/favicon-16x16.png`} sizes="16x16" />
            <link rel="icon" type="image/png" href={`./images/`+app["icons_folder"]+`/favicon-32x32.png`} sizes="32x32" />
            <link rel="icon" type="image/png" href={`./images/`+app["icons_folder"]+`/favicon-96x96.png`} sizes="96x96" />
            <link rel="icon" type="image/png" href={`./images/`+app["icons_folder"]+`/favicon-128x128.png`} sizes="128x128" />
            <link rel="icon" type="image/png" href={`./images/`+app["icons_folder"]+`/favicon-196x196.png`} sizes="196x196" />


            <link rel="apple-touch-icon-precomposed" sizes="57x57" href={`./images/`+app["icons_folder"]+`/apple-touch-icon-57x57.png`} />
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href={`./images/`+app["icons_folder"]+`/apple-touch-icon-72x72.png`} />
            <link rel="apple-touch-icon-precomposed" sizes="76x76" href={`./images/`+app["icons_folder"]+`/apple-touch-icon-76x76.png`} />
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href={`./images/`+app["icons_folder"]+`/apple-touch-icon-114x114.png`} />
            <link rel="apple-touch-icon-precomposed" sizes="120x120" href={`./images/`+app["icons_folder"]+`/apple-touch-icon-120x120.png`} />
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href={`./images/`+app["icons_folder"]+`/apple-touch-icon-144x144.png`} />
            <link rel="apple-touch-icon-precomposed" sizes="152x152" href={`./images/`+app["icons_folder"]+`/apple-touch-icon-152x152.png`} />

            <meta name="msapplication-TileImage" content={`./images/`+app["icons_folder"]+`/mstile-144x144.png`} />
            <meta name="msapplication-square70x70logo" content= {`./images/`+app["icons_folder"]+`/mstile-70x70.png`} />
            <meta name="msapplication-square150x150log" content= {`./images/`+app["icons_folder"]+`/mstile-150x150.png`} />
            <meta name="msapplication-square310x310logo" content= {`./images/`+app["icons_folder"]+`/mstile-310x310.png`} />
        </>,
        document.head
    );
};

export default TouchIcons;