import React from 'react';
import { SocialMediaIconStyles } from '../../utils/export/exportStyles';
import { media } from '../../utils/export/exportMedia';


const socialMedia = [
    {
        name: "instagram",
        iconStyle: SocialMediaIconStyles.igIcon,
        path: process.env.REACT_APP_INSTAGRAM
    },
    {
        name: "linkedin",
        iconStyle: SocialMediaIconStyles.inIcon,
        path: process.env.REACT_APP_LINKEDIN
    }
];

export default class SocialMediaIcon extends React.Component {
    render() {
        return (
            <div className={SocialMediaIconStyles.socialMedia}>
                {socialMedia.map((platform) => 
                    <div className={platform.iconStyle} key={platform.name} >
                        <a href={platform.path}>
                            <div className={SocialMediaIconStyles.imgWrapper}>
                                <img className={SocialMediaIconStyles.imgClass} src={media[platform.name]} alt="" />
                            </div>
                        </a>
                    </div>
                )}
            </div>
        );
    }
}