const colors = {
  primary: '#F06624',
  secondary: '#63ADF2',
  backgroundColor: '#2D3142',
  cardColor: '#121212',
  borderColor: '#272729',
  textColor: '#F6F7EB',
  textColor2: '#B3B4AB'
};

const elementsTheme = {
  Text: {
    style: {
      color: colors.textColor
    }
  },
  Overlay: {
    overlayBackgroundColor: colors.backgroundColor
  }
};

const rnTheme = {
  dark: false,
  colors: {
    primary: colors.primary,
    background: colors.backgroundColor,
    card: colors.cardColor,
    text: colors.textColor,
    border: colors.borderColor
  }
};
export { colors, elementsTheme, rnTheme };
