import React from 'react';
import Link from 'gatsby-link';
import Cookies from 'universal-cookie';
import "isomorphic-fetch";
const cookies = new Cookies();
var name = (cookies.get('name'));
var key = (cookies.get('key'));
console.log(key);

class Homework {
  async loadTest() {
    try {
      //grab courses
      const response = await fetch('https://classroom.googleapis.com/v1/courses?access_token=' + key);
      const json = await response.json();
      //coursemax will eventually be user defined
      var coursemax = 4;
      //grabbing the name and assinments of each course
      for(var course =0;course<json.courses.length;course++ ){
        //grab course info
        var coursework = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[course].id+'/courseWork?access_token='+key);
        var coursejson = await coursework.json();
        //var with all the assignment names for this class
        var assignment ="";
        //grabbing all the assinments
        for(var assignmentnum in coursejson.courseWork){
          if (assignmentnum<=coursemax){
            //add in assignment
            assignment += "<p>"+coursejson.courseWork[assignmentnum].title+"</p>";
          }
        }
        //puts courses and assinments into ids to render
        document.getElementById('root'+course).innerHTML = assignment;
        document.getElementById('rootname'+course).innerHTML = json.courses[course].name+'</b>'+':'+'<br/>';;
      }
    } catch(err) {
      console.log(err);
    }
  }
}
var app = new Homework();
app.loadTest();
const LoginPage = () =>
  <div>
    <h1>Welcome {name}</h1>
    <p id = "rootname0">Loading</p>
    <p id = "root0"></p>
    <p id = "rootname1"></p>
    <p id = "root1"></p>
    <p id = "rootname2"></p>
    <p id = "root2"></p>
    <p id = "rootname3"></p>
    <p id = "root3"></p>
    <p id = "rootname4"></p>
    <p id = "root4"></p>
    <p id = "rootname5"></p>
    <p id = "root5"></p>
    <p id = "rootname6"></p>
    <p id = "root6"></p>
    <p id = "rootname7"></p>
    <p id = "root7"></p>
  </div>
export default LoginPage
