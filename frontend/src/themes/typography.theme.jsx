// function to make the font size responsive
const responsiveFontSize = (value) => {
	return `${value}vw`;
};
const responsiveFontSizes = ({ sm, md, lg }) => {
	return {
		'@media (min-width:600px)': {
			fontSize: responsiveFontSize(sm),
		},
		'@media (min-width:900px)': {
			fontSize: responsiveFontSize(md),
		},
		'@media (min-width:1200px)': {
			fontSize: responsiveFontSize(lg),
		},
	};
};

//Font families
const SECONDARY_FONT = 'Montserrat, sans-serif'; //For headings
const PRIMARY_FONT = 'Open Sans, sans-serif'; //For Body text

//Font Weights
const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 500;
const fontWeightBold = 600;

const typography = {
  fontFamily: PRIMARY_FONT,
  fontWeight: fontWeightRegular,
  h1: {
    fontFamily: SECONDARY_FONT,
    fontWeight: fontWeightBold,
    lineHeight: 1.0,
    textTransform: "capitalize",
    letterSpacing: -1.5,
    fontSize: responsiveFontSize(10),
    ...responsiveFontSizes({ sm: 8.5, md: 7.5, lg: 6.5 }),
  },
  h2: {
    fontFamily: SECONDARY_FONT,
    fontWeight: fontWeightLight,
    textTransform: "capitalize",
    letterSpacing: -0.5,
    fontSize: responsiveFontSize(8.0),
    ...responsiveFontSizes({ sm: 7.5, md: 6.5, lg: 5.0 }),
  },
  h3: {
    fontFamily: SECONDARY_FONT,
    fontWeight: fontWeightRegular,
    lineHeight: 1.0,
    textTransform: "capitalize",
    letterSpacing: 0,
    fontSize: responsiveFontSize(6),
    ...responsiveFontSizes({ sm: 6, md: 3.76, lg: 3.5 }),
  },
  h4: {
    fontFamily: SECONDARY_FONT,
    fontWeight: fontWeightRegular,
    lineHeight: 1.0,
    textTransform: "capitalize",
    letterSpacing: 0.25,
    fontSize: responsiveFontSize(3.5),
    ...responsiveFontSizes({ sm: 3.6, md: 3.75, lg: 3.0 }),
  },
  h5: {
    fontFamily: SECONDARY_FONT,
    fontWeight: fontWeightRegular,
    lineHeight: 1.25,
    textTransform: "capitalize",
    letterSpacing: 0,
    fontSize: responsiveFontSize(3.75),
    ...responsiveFontSizes({ sm: 2.75, md: 3, lg: 1.75 }),
  },
  h6: {
    fontFamily: SECONDARY_FONT,
    fontWeight: fontWeightMedium,
    lineHeight: 1.0,
    textTransform: "capitalize",
    letterSpacing: 0.15,
    fontSize: responsiveFontSize(3.5),
    ...responsiveFontSizes({ sm: 2.75, md: 3, lg: 1.75 }),
  },
  subtitle1: {
    fontFamily: SECONDARY_FONT,
    fontWeight: fontWeightLight,
    letterSpacing: 0.15,
    lineHeight: 1.25,
    fontSize: responsiveFontSize(3.5),
    ...responsiveFontSizes({ sm: 3.5, md: 2.5, lg: 1.75 }),
  },
  subtitle2: {
    fontFamily: SECONDARY_FONT,
    fontWeight: fontWeightMedium,
    letterSpacing: 0.15,
    fontSize: responsiveFontSize(4.5),
    ...responsiveFontSizes({ sm: 3.75, md: 2.75, lg: 2.0 }),
  },
  body1: {
    fontFamily: PRIMARY_FONT,
    fontWeight: fontWeightRegular,
    lineHeight: 1.5,
    letterSpacing: 0.5,
    fontSize: responsiveFontSize(4.5),
    ...responsiveFontSizes({ sm: 3.75, md: 2.75, lg: 2.0 }),
  },
  body2: {
    fontFamily: PRIMARY_FONT,
    fontWeight: fontWeightRegular,
    lineHeight: 1.0,
    letterSpacing: 0.25,
    fontSize: responsiveFontSize(3.2),
    ...responsiveFontSizes({ sm: 3.0, md: 2.5, lg: 1.5 }),
  },
  button: {
    fontFamily: PRIMARY_FONT,
    fontWeight: fontWeightMedium,
    textTransform: "uppercase",
    letterSpacing: 1.25,
    fontSize: responsiveFontSize(3.5),
    ...responsiveFontSizes({ sm: 2.0, md: 1.75, lg: 1.4 }),
  },
  caption: {
    fontFamily: PRIMARY_FONT,
    fontWeight: fontWeightRegular,
    lineHeight: 1.5,
    letterSpacing: 0.4,
    textTransform: "uppercase",
    fontSize: responsiveFontSize(3.0),
    ...responsiveFontSizes({ sm: 2.5, md: 1.5, lg: 1.75 }),
  },
  overline: {
    fontFamily: PRIMARY_FONT,
    fontWeight: fontWeightRegular,
    letterSpacing: 1.5,
  },
};
export default typography;
