import React from 'react';
import { Helper } from '../../utils/export/exportHelpers';
import { OverviewIconStyles } from '../../utils/export/exportStyles';
import { media } from '../../utils/export/exportMedia';
import labels from '../labels/Labels.json';

const initialStyles = {
    overviewIconContainer: OverviewIconStyles.overviewIconContainer,
    iconImage: OverviewIconStyles.iconImage,
    overviewTitle: OverviewIconStyles.overviewTitle,
    overviewDesc: OverviewIconStyles.overviewDesc
};

const hoverStyles = {
    overviewIconContainer: initialStyles.overviewIconContainer,
    iconImage: Helper.overrideCSS(initialStyles.iconImage, OverviewIconStyles.iconImageHover),
    overviewTitle: initialStyles.overviewTitle,
    overviewDesc: Helper.overrideCSS(initialStyles.overviewDesc, OverviewIconStyles.overviewDescHover)
};

export default class OverviewIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: this.props.icon,
            path: this.props.path,
            styles: initialStyles
        }
    }
    
    render() {
        const styles = this.state.styles;
        const icon = this.state.icon;
        const iconInfo = {
            src: icon ? media[icon] : null,
            title: icon ? labels[`${icon}OverviewTitle`] : null,
            desc: icon ? labels[`${icon}OverviewDesc`] : null
        };
        return (
            <div className={styles.overviewIconContainer}>
                <a href={this.state.path}>
                    <img className={styles.iconImage}
                         src={iconInfo.src} 
                         alt=""
                         onMouseOver={() => this.setState({ styles: hoverStyles })} 
                         onMouseOut={() => this.setState({ styles: initialStyles })} 
                    />
                </a>
                <span className={styles.overviewTitle}>{iconInfo.title}</span>
                <span className={styles.overviewDesc}>{iconInfo.desc}</span>
            </div>
        );
    }
};