import React from 'react';
import { ContentStyles, NavigationStyles } from '../../utils/export/exportStyles';
import { Helper } from '../../utils/export/exportHelpers';

const intro = Helper.locations.introPath;
const about = Helper.locations.aboutPath;
const interests = Helper.locations.interestsPath;
const gallery = Helper.locations.galleryPath;

const fadeInNavBar = Helper.overrideCSS(NavigationStyles.navigation, ContentStyles.fadeInModule);
const button = NavigationStyles.button;
const disabled = NavigationStyles.disabled;

export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.getButtonClass = this.getButtonClass.bind(this);
    }

    getButtonClass(location) {
        return location === this.props.currentLoc ? Helper.overrideCSS(button, disabled) : button;
    }

    render() {
        return (
            <div className={fadeInNavBar}>
                <a href={intro} className={this.getButtonClass(intro)}>Intro</a>
                <a href={about} className={this.getButtonClass(about)}>About</a>
                <a href={interests} className={this.getButtonClass(interests)}>Interests</a>
                <a href={gallery} className={this.getButtonClass(gallery)}>Gallery</a>
            </div>
        );
    }

}