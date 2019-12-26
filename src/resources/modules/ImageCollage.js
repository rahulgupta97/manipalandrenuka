import React from 'react';
import { media } from '../../utils/export/exportMedia';
import { ImageCollageStyles } from '../../utils/export/exportStyles';

const imageCollage = [
    {
        iconName: "overviewcont_1",
        iconStyle: ImageCollageStyles.iconImg
    },
    {
        iconName: "overviewcontmain",
        iconStyle: ImageCollageStyles.iconImg
    },
    {
        iconName: "overviewcont_2",
        iconStyle: ImageCollageStyles.iconImg
    }
];

export default class ImageCollage extends React.Component {
    render() {
        return(
            <div>
                {imageCollage.map((image) =>
                    <img src={media[image.iconName]}
                         alt=""
                         className={image.iconStyle} 
                         key={image.iconName}
                    />
                )}
            </div>
        );
    }
}