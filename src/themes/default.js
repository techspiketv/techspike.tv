import createMuiTheme from 'material-ui/styles/createMuiTheme';


import red from 'material-ui/colors/red';

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#616161',
      main: '#424242',
      dark: '#212121'
    },
    secondary: {
      light: '#689F38',
      main: '#558B2F',
      dark: '#33691E'
    },
    typography: {
      fontFamily: ['Lato', 'Rajdhani', 'Roboto Condensed'].join(','),
      display1: {
        fontFamily: 'Rajdhani'
      }

      // subheading: {
      //   fontFamily: 'Roboto Condensed'
      // }
    },
    error: red
  },
  overrides: {
    MuiFormLabel: {
      root: {
        // color: 'red',
        textTransform: 'uppercase'
      }
    },
    MuiFormInput: {
      // underline: {
      //   borderBottom: `2px solid ${'red'}`,
      // }
    }
  }
});
