import React, { useEffect, useState } from 'react';
import './version-band.scss';
import './version-band.color.scss';


interface AppProps {
    'active-version': string;
    'app_url': string;
}

const VersionBand = ({ app }: { app: AppProps }) => {
    const [isLatest, setIsLatest] = useState<boolean>(true);
    useEffect(() => {
        console.log(app['active-version']);
        if (app['active-version'] !== 'Local') {
            fetch('https://api.github.com/repos/ameyrupji-com/ameyrupji.com/releases/latest')
                .then(response => response.json())
                .then(data => {
                    // check if symantic(app.activeVersion) is less than symantic(latestVersion)
                    const currentVersion = app['active-version'].replace('v', '').replace(' - Beta','').split('.').map(Number);
                    const latestVersion = data.tag_name.replace('v', '').replace(' - Beta','').split('.').map(Number);
                    if (currentVersion[0] < latestVersion[0] || 
                        (currentVersion[0] === latestVersion[0] && currentVersion[1] < latestVersion[1]) ||
                        (currentVersion[0] === latestVersion[0] && currentVersion[1] === latestVersion[1] && currentVersion[2] < latestVersion[2])) {
                        setIsLatest(false);
                    }
                })
                .catch(error => {
                    console.error('Error fetching latest version:', error);
                });
}
    }, []);

    return !isLatest && (
        <div className="container-full-bg alert alert-warning" role="alert" id="version-band-main">
            <div className="container">
                Current Version: <span id="version-id">{app['active-version']}</span>. View <a href={app.app_url} className="alert-link">latest</a>.
            </div>
        </div>
    );
};

export default VersionBand;