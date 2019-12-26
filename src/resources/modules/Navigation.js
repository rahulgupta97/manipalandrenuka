import React from 'react';
import { Redirect } from 'react-router-dom';
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
        this.state = {
            location: null
        }
        this.getButtonClass = this.getButtonClass.bind(this);
        this.redirectTo = this.redirectTo.bind(this);
    }

    getButtonClass(location) {
        return location === this.props.currentLoc ? Helper.overrideCSS(button, disabled) : button;
    }

    redirectTo(path) {
        return <Redirect to={path} />
    }

    render() {
        if (this.state.location) {
            return this.redirectTo(this.state.location);
        }
        else {
            return (
                <div className={fadeInNavBar}>
                    <span onClick={() => this.setState({ location: intro })} className={this.getButtonClass(intro)}>Intro</span>
                    <span onClick={() => this.setState({ location: about })} className={this.getButtonClass(about)}>About</span>
                    <span onClick={() => this.setState({ location: interests })} className={this.getButtonClass(interests)}>Interests</span>
                    <span onClick={() => this.setState({ location: gallery })} className={this.getButtonClass(gallery)}>Gallery</span>
                </div>
            );
        }
    }

}