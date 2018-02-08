import Link from 'gatsby-link';
import Cookies from 'universal-cookie';
import "isomorphic-fetch";
import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { amber, blue, red } from 'material-ui/colors';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Tabs, { Tab } from 'material-ui/Tabs';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import DateRangeIcon from 'material-ui-icons/DateRange';
import AssignmentIcon from 'material-ui-icons/Assignment';
import NoteIcon from 'material-ui-icons/Note';



const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: blue
  },
  root: {
    flexGrow: 1,
  },

});

var name = (cookies.get('name'));
var key = (cookies.get('key'));
console.log(key);
=======
//Logic code

  componentDidMount() {
    async function loadTest() {
      try {
        const response = await fetch('https://classroom.googleapis.com/v1/courses?access_token=' + key);
      const json = await response.json();
      console.log(json);
      var coursemax = 4;
      var length = coursemax;
      var ctext = [length];
      var ctext2 = [length];
      var counter1 = 0;
      var coursework;
      var coursejson;
      var courses = [];
      var counter2 = 0;
      for (counter1 in json.courses) {
        coursework = await fetch('https://classroom.googleapis.com/v1/courses/' + json.courses[counter1].id + '/courseWork?access_token=' + key);
        coursejson = await coursework.json();
        courses[counter1] = coursejson;
      }
      console.log(courses);
      counter1 = 0;
      for (counter2 in courses) {
        ctext[counter2] = "";
        for (counter1 in courses[counter2].courseWork) {

          if (counter1 < coursemax) {
            ctext[counter2] += "<p>" + courses[counter2].courseWork[counter1].title + "</p>";
          }
        }
        document.getElementById('rootname' + counter2).innerHTML = json.courses[counter2].name + '</b>' + ':' + '<br/>';;

      }

      for (counter2 in ctext) {
        document.getElementById('root' + counter2).innerHTML = ctext[counter2];
      }
    } catch (err) {
      console.log(err);
    }
    }
    loadTest();
  }


const LoginPage = () =>
  <MuiThemeProvider theme={theme}>
    <div>
      <AppBar position="static" id='title'>
        <Toolbar>
          <Typography type="title" color='inherit'>
            MVHS Homework App
            </Typography>
          <div id='avatar' color='inherit'><Avatar>{name.charAt(0)}</Avatar></div>
        </Toolbar>
      </AppBar>
      <Paper id='calendar'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b id="rootname0">Loading</b></TableCell>
              <TableCell><p id="root0"></p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><b id="rootname1"></b></TableCell>
              <TableCell><p id="root1"></p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><b id="rootname2"></b></TableCell>
              <TableCell><p id="root2"></p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><b id="rootname3"></b></TableCell>
              <TableCell><p id="root3"></p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><b id="rootname4"></b></TableCell>
              <TableCell><p id="root4"></p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><b id="rootname5"></b></TableCell>
              <TableCell><p id="root5"></p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><b id="rootname6"></b></TableCell>
              <TableCell><p id="root6"></p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><b id="rootname7"></b></TableCell>
              <TableCell><p id="root7"></p></TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </Paper>
    </div>
  </MuiThemeProvider>
export default LoginPage

