export const Helper = {
    locations: {
        introPath: '/'+process.env.REACT_APP_INTRO_PATH,
        aboutPath: '/'+process.env.REACT_APP_ABOUT_PATH,
        interestsPath: '/'+process.env.REACT_APP_INTERESTS_PATH,
        galleryPath: '/'+process.env.REACT_APP_GALLERY_PATH
    },
    overrideCSS: function (original, override) {
        return original + ' ' + override;
    }
};