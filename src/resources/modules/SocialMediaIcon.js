import React from 'react';
import { SocialMediaIconStyles } from '../../utils/export/exportStyles';
import linkedin from '../images/socialMedia/linkedin.png';
import instagram from '../images/socialMedia/instagram.png';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className={SocialMediaIconStyles.socialMedia}>
                <div className={SocialMediaIconStyles.igIcon}>
                    <a href={process.env.REACT_APP_INSTAGRAM}>
                        <div className={SocialMediaIconStyles.imgWrapper}>
                            <img src={instagram} height='21px' width='21px' />
                        </div>
                    </a>
                </div>
                <div className={SocialMediaIconStyles.inIcon}>
                    <a href={process.env.REACT_APP_LINKEDIN}>
                        <div className={SocialMediaIconStyles.imgWrapper}>
                            <img src={linkedin} />
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}