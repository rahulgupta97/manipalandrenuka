import React from 'react';
import { SocialMediaIcon, ArrowScrollable, Navigation } from '../../utils/export/exportModules';
import { Helper } from '../../utils/export/exportHelpers';
import { ContentStyles, AboutStyles } from '../../utils/export/exportStyles';

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
                        <div className={AboutStyles.bio_mr}>
                            
                        </div>
                    </div>
                    <div className={AboutStyles.section3}>
                        <div className={AboutStyles.bio_rr}>
                            
                        </div>
                        <SocialMediaIcon />
                    </div>
                </div>
            </div>
        );
    }
}