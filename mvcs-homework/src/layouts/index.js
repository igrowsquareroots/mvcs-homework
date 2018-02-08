import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import {amber,blue,red} from 'material-ui/colors';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Cookies from 'universal-cookie';

import './index.css';

const Header = () =>
<div>
<MuiThemeProvider theme={theme}>
    <AppBar id='title' color='primary'>
    
      <Typography type='title'>MVHS Homework App</Typography>
    </AppBar>
  </MuiThemeProvider>
</div>
const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="MVHS Homework App"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{

      }}
    >
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
