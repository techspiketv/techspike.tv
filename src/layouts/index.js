
import React from 'react'

import '../styles/all.sass'

import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../themes/default'

export default class TemplateWrapper extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {this.props.children()}
      </MuiThemeProvider>
    )
  }
}
