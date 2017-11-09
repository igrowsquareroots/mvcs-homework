import React from 'react';
import Link from 'gatsby-link';
import Cookies from 'universal-cookie';
import "isomorphic-fetch";

const cookies = new Cookies();

var name = (cookies.get('name'));
var key = (cookies.get('key'));
console.log(key);

class Alex {
  async loadTest() {
    try {
      const response = await fetch('https://classroom.googleapis.com/v1/courses?access_token=' + key);
      const json = await response.json();
      console.log(json);
      document.getElementById('root').innerHTML = json.courses[1].name;
      //In the next fetch line you must specify which course you want to access. Send me a slack message if you need help. -Alex
      

      var length = json.courses.length;
      
      
      if (length=>1){
        document.getElementById('root').innerHTML = json.courses[0].name;
        const coursework = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[0].id+'/courseWork?access_token='+key)
        const coursejson = await coursework.json();
      }
      if (length=>2){
        document.getElementById('root1').innerHTML = json.courses[1].name;
        const coursework1 = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[1].id+'/courseWork?access_token='+key)
        const coursejson1 = await coursework1.json();
      }
      if (length=>3){
        document.getElementById('root2').innerHTML = json.courses[2].name;
        const coursework2 = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[2].id+'/courseWork?access_token='+key)
        const coursejson2 = await coursework2.json();
      }
      if (length=>4){
        document.getElementById('root3').innerHTML = json.courses[3].name;
        const coursework3 = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[3].id+'/courseWork?access_token='+key)
        const coursejson3 = await coursework3.json();
      }
      if (length=>5){
        document.getElementById('root4').innerHTML = json.courses[4].name;
        const coursework4 = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[4].id+'/courseWork?access_token='+key)
        const coursejson4 = await coursework4.json();
      }
      if (length=>6){
        document.getElementById('root5').innerHTML = json.courses[5].name;
        const coursework5 = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[5].id+'/courseWork?access_token='+key)
        const coursejson5 = await coursework5.json();
      }
      if (length=>7){
        document.getElementById('root6').innerHTML = json.courses[6].name;
        const coursework6 = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[6].id+'/courseWork?access_token='+key)
        const coursejson6 = await coursework6.json();
      }
      if (length=>8){
        document.getElementById('root7').innerHTML = json.courses[7].name;
        const coursework7 = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[7].name+'/courseWork?access_token='+key)
        const coursejson7 = await coursework7.json();
      }
      
      
      console.log(coursejson);
      } catch(err) {
        console.log(err);
    }
  }
}

var al = new Alex();
al.loadTest();

const LoginPage = () =>
  <div>
    <h1>Welcome {name}</h1>

    <p id = "root"></p>
    <p id = "root1"></p>
    <p id = "root2"></p>
    <p id = "root3"></p>
    <p id = "root4"></p>
    <p id = "root5"></p>
    <p id = "root6"></p>
    <p id = "root7"></p>

    <p id= "coursework"></p>
    <p id= "coursework1"></p>
    <p id= "coursework2"></p>
    <p id= "coursework3"></p>
    <p id= "coursework4"></p>
    <p id= "coursework5"></p>
    <p id= "coursework6"></p>
    <p id= "coursework7"></p>
  </div>

export default LoginPage