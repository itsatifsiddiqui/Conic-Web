import React from 'react'
import { Alert, Button } from '@mui/material';

function getMobileOS() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        return "Android";
    }


    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "Web";
}

function isAndroid() { return getMobileOS() === 'Android' };
function isIos() { return getMobileOS() === 'iOS' };
function isWeb() { return getMobileOS() === 'Web' };

function openDownloadPage() {

    const playstoreUrl = 'https://play.google.com/store/apps/details?id=com.theexotech.elefantezen';
    const appstoreUrl = 'https://apps.apple.com/pk/app/meditaci%C3%B3n-guiada-elefante-zen/id1533744240';

    if (isAndroid()) {
        window.open(playstoreUrl);
    } else if (isIos()) {
        window.open(appstoreUrl);
    }
};

function DownloadAppBanner() {
    let downloadButton;

    //Only show on mobile browser
    if (!isWeb()) {
        downloadButton = <Button color="inherit" size="small" onClick={openDownloadPage}>
            DOWNLOAD APP
        </Button>;
    }

    return (
        <Alert severity="info" variant="filled" style={{ borderRadius: 0 }}
            action={downloadButton}
        >
            Download Conic App Now
        </Alert>
    )
}

export default DownloadAppBanner;
