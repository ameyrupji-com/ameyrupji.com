import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// beta icons
import facicon16x16Beta from './beta-icons/favicon-16x16.png';
import facicon32x32Beta from './beta-icons/favicon-32x32.png';
import facicon96x96Beta from './beta-icons/favicon-96x96.png';
import facicon128x128Beta from './beta-icons/favicon-128x128.png';
import facicon196x1968Beta from './beta-icons/favicon-196x196.png';

import appleTouchIconBeta57x57 from './beta-icons/apple-touch-icon-57x57.png';
import appleTouchIconBeta60x60 from './beta-icons/apple-touch-icon-60x60.png';
import appleTouchIconBeta72x72 from './beta-icons/apple-touch-icon-72x72.png';
import appleTouchIconBeta76x76 from './beta-icons/apple-touch-icon-76x76.png';
import appleTouchIconBeta114x114 from './beta-icons/apple-touch-icon-114x114.png';
import appleTouchIconBeta120x120 from './beta-icons/apple-touch-icon-120x120.png';
import appleTouchIconBeta144x144 from './beta-icons/apple-touch-icon-144x144.png';
import appleTouchIconBeta152x152 from './beta-icons/apple-touch-icon-152x152.png';

import msTileBeta70x70 from './beta-icons/mstile-70x70.png';
import msTileBeta144x144 from './beta-icons/mstile-144x144.png';
import msTileBeta150x150 from './beta-icons/mstile-150x150.png';
import msTileBeta310x310 from './beta-icons/mstile-310x310.png';

// # prod icons
import facicon16x16 from './icons/favicon-16x16.png';
import facicon32x32 from './icons/favicon-32x32.png';
import facicon96x96 from './icons/favicon-96x96.png';
import facicon128x128 from './icons/favicon-128x128.png';
import facicon196x1968 from './icons/favicon-196x196.png';

import appleTouchIcon57x57 from './icons/apple-touch-icon-57x57.png';
import appleTouchIcon60x60 from './icons/apple-touch-icon-60x60.png';
import appleTouchIcon72x72 from './icons/apple-touch-icon-72x72.png';
import appleTouchIcon76x76 from './icons/apple-touch-icon-76x76.png';
import appleTouchIcon114x114 from './icons/apple-touch-icon-114x114.png';
import appleTouchIcon120x120 from './icons/apple-touch-icon-120x120.png';
import appleTouchIcon144x144 from './icons/apple-touch-icon-144x144.png';
import appleTouchIcon152x152 from './icons/apple-touch-icon-152x152.png';

import msTile70x70 from './icons/mstile-70x70.png';
import msTile144x144 from './icons/mstile-144x144.png';
import msTile150x150 from './icons/mstile-150x150.png';
import msTile310x310 from './icons/mstile-310x310.png';



interface AppProps {
    "env": string;
    "app_name": string;
}

const TouchIcons = ({ app }: { app: AppProps }) => {
    return (
        <Helmet>
        <title>{app["app_name"]}</title>
        <meta name="application-name" content={app["app_name"]}/>
        <meta name="description" content={app["app_name"]} />
        <meta name="og:title" property="og:title" content={app["app_name"]} />

         <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={app["app_name"]} />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="msapplication-tooltip" content={app["app_name"]} />

        { app["env"] === "prod" && (
            <>
                <link rel="icon" type="image/png" href={facicon16x16Beta} sizes="16x16" />
                <link rel="icon" type="image/png" href={facicon32x32Beta} sizes="32x32" />
                <link rel="icon" type="image/png" href={facicon96x96Beta} sizes="96x96" />
                <link rel="icon" type="image/png" href={facicon128x128Beta} sizes="128x128" />
                <link rel="icon" type="image/png" href={facicon196x1968Beta} sizes="196x196" />


                <link rel="apple-touch-icon-precomposed" sizes="57x57" href={appleTouchIconBeta57x57} />
                <link rel="apple-touch-icon-precomposed" sizes="60x60" href={appleTouchIconBeta60x60} />
                <link rel="apple-touch-icon-precomposed" sizes="72x72" href={appleTouchIconBeta72x72} />
                <link rel="apple-touch-icon-precomposed" sizes="76x76" href={appleTouchIconBeta76x76} />
                <link rel="apple-touch-icon-precomposed" sizes="114x114" href={appleTouchIconBeta114x114} />
                <link rel="apple-touch-icon-precomposed" sizes="120x120" href={appleTouchIconBeta120x120} />
                <link rel="apple-touch-icon-precomposed" sizes="144x144" href={appleTouchIconBeta144x144} />
                <link rel="apple-touch-icon-precomposed" sizes="152x152" href={appleTouchIconBeta152x152} />

                <meta name="msapplication-TileImage" content={msTileBeta144x144} />
                <meta name="msapplication-square70x70logo" content= {msTileBeta70x70} />
                <meta name="msapplication-square150x150log" content= {msTileBeta150x150} />
                <meta name="msapplication-square310x310logo" content= {msTileBeta310x310} />
            </>
        )}

        { app["env"] === "beta" && (
           <>
                <link rel="icon" type="image/png" href={facicon16x16} sizes="16x16" />
                <link rel="icon" type="image/png" href={facicon32x32} sizes="32x32" />
                <link rel="icon" type="image/png" href={facicon96x96} sizes="96x96" />
                <link rel="icon" type="image/png" href={facicon128x128} sizes="128x128" />
                <link rel="icon" type="image/png" href={facicon196x1968} sizes="196x196" />


                <link rel="apple-touch-icon-precomposed" sizes="57x57" href={appleTouchIcon57x57} />
                <link rel="apple-touch-icon-precomposed" sizes="60x60" href={appleTouchIcon60x60} />
                <link rel="apple-touch-icon-precomposed" sizes="72x72" href={appleTouchIcon72x72} />
                <link rel="apple-touch-icon-precomposed" sizes="76x76" href={appleTouchIcon76x76} />
                <link rel="apple-touch-icon-precomposed" sizes="114x114" href={appleTouchIcon114x114} />
                <link rel="apple-touch-icon-precomposed" sizes="120x120" href={appleTouchIcon120x120} />
                <link rel="apple-touch-icon-precomposed" sizes="144x144" href={appleTouchIcon144x144} />
                <link rel="apple-touch-icon-precomposed" sizes="152x152" href={appleTouchIcon152x152} />

                <meta name="msapplication-TileImage" content={msTile144x144} />
                <meta name="msapplication-square70x70logo" content= {msTile70x70} />
                <meta name="msapplication-square150x150log" content= {msTile150x150} />
                <meta name="msapplication-square310x310logo" content= {msTile310x310} />
            </>
        )}
        
      </Helmet>
    );
};

export default TouchIcons;