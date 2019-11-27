import React from 'react';
import { ContentStyles, ArrowScrollableStyles } from '../../utils/export/exportStyles';
import { Helper } from '../../utils/export/exportHelpers';

const fadeInScrollArrow = Helper.overrideCSS(ArrowScrollableStyles.arrowScrollable, ContentStyles.fadeInModule);

export default class ArrowScrollable extends React.Component {
    render() {
        return (
            <div className={fadeInScrollArrow}>
                <svg className="http://www.w3.org/2000/svg"
                    focusable="false" 
                    width="55"
                    height="55"
                    fill="#000000"
                    viewBox="0 0 24 24" 
                    aria-hidden="true" 
                    role="presentation">
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                </svg>
            </div>
        );
    }
}