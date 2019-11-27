import React from 'react';
import { SocialMediaIcon, ArrowScrollable, Navigation } from '../../utils/export/exportModules';
import { Helper } from '../../utils/export/exportHelpers';
import { ContentStyles, InterestsStyles } from '../../utils/export/exportStyles';

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
                        <div className={InterestsStyles.interests}>

                        </div>
                    </div>
                    <div className={InterestsStyles.section3}>
                        <div className={InterestsStyles.interestsContinued}>
                            
                        </div>
                        <SocialMediaIcon />
                    </div>
                </div>
            </div>
        );
    }
}