import React from 'react';
import { SocialMediaIcon, ArrowScrollable, Navigation } from '../../utils/export/exportModules';
import { Helper } from '../../utils/export/exportHelpers';
import { AboutStyles } from '../../utils/export/exportStyles';
import { media } from '../../utils/export/exportMedia';
import labels from '../labels/Labels.json';

const overview = process.env.REACT_APP_OVERVIEW.split(',');
const aboutIcons = [];
overview.forEach((icon) => {
    aboutIcons.push(`about_${icon}`);
});

export default class About extends React.Component {
    render() {
        return (
            <div>
                <Navigation currentLoc={Helper.locations.aboutPath} />
                <div className={AboutStyles.contentWrap}>
                    <div className={AboutStyles.section1}>
                        <div className={AboutStyles.firstGlance}></div>
                        <ArrowScrollable />
                    </div>
                    <div className={AboutStyles.section2}>
                        <div className={AboutStyles.titleDiv}>
                            <span className={AboutStyles.nameTitle}>
                                {labels.about}
                            </span>
                        </div>
                        <div className={AboutStyles.aboutIcons}>
                            {aboutIcons.map((aboutIcon) => 
                                <div className={AboutStyles.aboutIconContainer}>
                                    <img className={AboutStyles.aboutIconImg}
                                         src={media[aboutIcon]}
                                         alt=""
                                    />
                                    <span className={AboutStyles.aboutIconDesc}>{labels[aboutIcon]}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <SocialMediaIcon />
                </div>
            </div>
        );
    }
}