import React from 'react';
import { SocialMediaIcon, ArrowScrollable, Navigation, ImageCollage } from '../../utils/export/exportModules';
import { Helper } from '../../utils/export/exportHelpers';
import { InterestsStyles } from '../../utils/export/exportStyles';
import labels from '../labels/Labels.json';

export default class Interests extends React.Component {
    render() {
        return (
            <div>
                <Navigation currentLoc={Helper.locations.interestsPath} />
                <div className={InterestsStyles.contentWrap}>
                    <div className={InterestsStyles.section1}>
                        <div className={InterestsStyles.firstGlance}></div>
                        <ArrowScrollable />
                    </div>
                    <div className={InterestsStyles.section2}>
                        <div className={InterestsStyles.background}></div>
                        <div className={InterestsStyles.overlay}>
                            <div className={InterestsStyles.titleDiv}>
                                <span className={InterestsStyles.nameTitle}>
                                    {labels.interests}
                                </span>
                            </div>
                            <div className={InterestsStyles.interests}>

                            </div>
                        </div>
                    </div>
                    <div className={InterestsStyles.section3}>
                        <div className={InterestsStyles.overviewContinued}>
                            <div className={InterestsStyles.overviewContinuedIcon}>
                                <ImageCollage />
                            </div>
                            <div className={InterestsStyles.divider}></div>
                            <span className={InterestsStyles.overviewContinuedDesc}>{labels.overviewContinuedDesc}</span>
                        </div>
                    </div>
                    <SocialMediaIcon />
                </div>
            </div>
        );
    }
}