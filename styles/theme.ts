import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0097a7',
      dark: '#006064',
      light: '#00bcd4',
    },
    secondary: {
      main: '#f50057',
      dark: '#880e4f',
      light: '#f06292',
    },
    text:{
        primary: '#ffffff',
        secondary: "#e2e2e2",
        hint: '#4caf50'
    },
    error: {
        main: "#eb1111",
      },
      background: {
        default: '#212121',
      },
  },
});

export default theme;
