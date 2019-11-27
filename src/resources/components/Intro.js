import React from 'react';
import { SocialMediaIcon, ArrowScrollable, Navigation } from '../../utils/export/exportModules';
import { Helper } from '../../utils/export/exportHelpers';
import { ContentStyles, IntroStyles } from '../../utils/export/exportStyles';
import mentorship from '../images/overview/Mentorship.png';
import leadership from '../images/overview/Leadership.png';
import overviewcont from '../images/overviewcont.png';
import labels from '../labels/Labels.json';

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
                            <text className={IntroStyles.nameTitle}>{labels.title}</text>
                            <div className={IntroStyles.titleDivider}></div>
                        </div>
                        <div className={IntroStyles.overview}>
                            <div className={IntroStyles.overviewIconContainer}>
                                {/* <div className={IntroStyles.overviewIcon}> */}
                                    <img className={IntroStyles.iconImage} src={mentorship} /><br/><br/>
                                    <text className={IntroStyles.overviewTitle}>{labels.mentorshipOverviewTitle}</text>
                                    {/* <text className={IntroStyles.overviewDesc}>{labels.mentorshipOverviewDesc}</text> */}
                                {/* </div> */}
                            </div>
                            <div className={IntroStyles.overviewIconContainer}>
                                {/* <div className={IntroStyles.overviewIcon}> */}
                                    <img className={IntroStyles.iconImage} src={leadership} /><br/><br/>
                                    <text className={IntroStyles.overviewTitle}>{labels.leadershipOverviewTitle}</text>
                                    {/* <text className={IntroStyles.overviewDesc}>{labels.leadershipOverviewDesc}</text> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    <div className={IntroStyles.section3}>
                        <div className={IntroStyles.overviewContinued}>
                            <div className={IntroStyles.overviewContinuedIcon}>
                                <img src={overviewcont} height='300px' width='300px' />
                            </div>
                            <text className={IntroStyles.overviewContinuedDesc}>{labels.overviewContinuedDesc}</text>

                        </div>
                        <SocialMediaIcon />
                    </div>
                </div>
            </div>
        );
    }
}