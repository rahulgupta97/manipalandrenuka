import React from 'react';
import { SocialMediaIcon, Navigation } from '../../utils/export/exportModules';
import { Helper } from '../../utils/export/exportHelpers';
import { ContentStyles, GalleryStyles } from '../../utils/export/exportStyles';

export default class Gallery extends React.Component {
    render() {
        return (
            <div>
                <Navigation currentLoc={Helper.locations.galleryPath} />
                <div className={GalleryStyles.contentWrap}>
                    <div>

                    </div>
                    <SocialMediaIcon />
                </div>
            </div>
        );
    }
}