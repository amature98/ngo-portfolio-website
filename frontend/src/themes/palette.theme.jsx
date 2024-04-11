const PRIMARY = {
  main: "#3C8DAB",
  dark: "#202125",
  light: "#F1F2F2",
};

const SECONDARY = {
  main: "#BD0097",
  dark: "#C92273",
  light: "#FAC1D0",
};
const ERROR = {
  main: "#F50F2D",
  dark: "#910115",
  light: "#ED5C70",
};
const SUCCESS = {
  main: "#02AD27",
  dark: "#063811",
  light: "#25C247",
};
const TEXT = {
  main: "#202125",
  secondary: '#C92273',
  contrast: "#f7f7f7",
  disabled: "rgba(0,0,0,0.12)",
};

// creating a color palette object that will be default export
const palette = {
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  text: { ...TEXT },
  background: {
    paper: PRIMARY.light,
    default: PRIMARY.light,
  },
  divider: PRIMARY.dark,
  
  action: {
    active: SECONDARY.main,
    activatedOpacity: 0.5,
    hover: SECONDARY.main,
    hoverOpacity: 0.5,
    selected: SECONDARY.main,
    selectedOpacity: 0.5,
    disabled: "rgba(0,0,0,0.12)",
    disabledBackground: "rgba(0,0,0,0.12)",
    disabledOpacity: 0.38,
    focus: SECONDARY.main,
    focusOpacity: 0.12,
  },
};
export default palette;
