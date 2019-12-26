import React from 'react';
import { SocialMediaIcon, ArrowScrollable, Navigation, OverviewIcon } from '../../utils/export/exportModules';
import { Helper } from '../../utils/export/exportHelpers';
import { IntroStyles } from '../../utils/export/exportStyles';
import labels from '../labels/Labels.json';

// Props for Overview Module
const overview = process.env.REACT_APP_OVERVIEW.split(',');
const path = process.env.REACT_APP_ABOUT_PATH;


export default class Intro extends React.Component {
    render() {
        return (
            <div>
                <Navigation currentLoc={Helper.locations.introPath} />
                <div className={IntroStyles.contentWrap}>
                    <div className={IntroStyles.section1}>
                        <div className={IntroStyles.firstGlance}></div>
                        <ArrowScrollable />
                    </div>
                    <div className={IntroStyles.section2}>
                        <div className={IntroStyles.titleDiv}>
                            <span className={IntroStyles.nameTitle}>
                                {labels.welcome}<br/>{labels.name}
                            </span>
                        </div>
                        <div className={IntroStyles.descContainer} >
                            {labels.welcomeDesc}
                        </div>
                    </div>
                    <div className={IntroStyles.section3}>
                        <div className={IntroStyles.titleDiv}>
                            <span className={IntroStyles.nameTitle}>
                                {labels.focus}
                            </span>
                        </div>
                        <div className={IntroStyles.overview}>
                            {overview.map((icon) => <OverviewIcon icon={icon} path={path} key={icon} />)}
                        </div>
                        <SocialMediaIcon />
                    </div>
                </div>
            </div>
        );
    }
}