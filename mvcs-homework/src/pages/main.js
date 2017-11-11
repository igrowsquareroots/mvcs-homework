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
     
      var cwnum = 4;//var to change how many classworks show up
      if(json.courses.length>0){
          document.getElementById('root').innerHTML = json.courses[0].name;
          //In the next fetch line you must specify which course you want to access. Send me a slack message if you need help. -Alex
          const coursework = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[0].id+'/courseWork?access_token='+key)
          const coursejson = await coursework.json();
          console.log(coursejson);
          console.log(coursejson.courseWork.length);
          if (cwnum>0 && coursejson.courseWork.length>0){
            document.getElementById('r0cw0').innerHTML = coursejson.courseWork[0].title;
          }
          if (cwnum>1 && coursejson.courseWork.length>1){
            document.getElementById('r0cw1').innerHTML = coursejson.courseWork[1].title;
          }
          if (cwnum>2 && coursejson.courseWork.length>2){
            document.getElementById('r0cw2').innerHTML = coursejson.courseWork[2].title;
          }
          if (cwnum>3 && coursejson.courseWork.length>3){
            document.getElementById('r0cw3').innerHTML = coursejson.courseWork[3].title;
          }
          if (cwnum>4 && coursejson.courseWork.length>4){
            document.getElementById('r0cw4').innerHTML = coursejson.courseWork[4].title;
          }
          if (cwnum>5 && coursejson.courseWork.length>5){
            document.getElementById('r0cw5').innerHTML = coursejson.courseWork[5].title;
          }
          if (cwnum>6 && coursejson.courseWork.length>6){
            document.getElementById('r0cw6').innerHTML = coursejson.courseWork[6].title;
          }
      }


      if(json.courses.length>1){
          document.getElementById('root1').innerHTML = json.courses[1].name;
          //In the next fetch line you must specify which course you want to access. Send me a slack message if you need help. -Alex
          const coursework1 = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[1].id+'/courseWork?access_token='+key)
          const coursejson1 = await coursework1.json();
          console.log(coursejson1);
          console.log(coursejson1.courseWork.length);
          if (cwnum>0 && coursejson1.courseWork.length>0){
            document.getElementById('r1cw0').innerHTML = coursejson1.courseWork[0].title;
          }
          if (cwnum>1 && coursejson1.courseWork.length>1){
            document.getElementById('r1cw1').innerHTML = coursejson1.courseWork[1].title;
          }
          if (cwnum>2 && coursejson1.courseWork.length>1){
            document.getElementById('r1cw2').innerHTML = coursejson1.courseWork[2].title;
          }
          if (cwnum>3 && coursejson1.courseWork.length>2){
            document.getElementById('r1cw3').innerHTML = coursejson1.courseWork[3].title;
          }
          if (cwnum>4 && coursejson1.courseWork.length>4){
            document.getElementById('r1cw4').innerHTML = coursejson1.courseWork[4].title;
          }
          if (cwnum>5 && coursejson1.courseWork.length>5){
            document.getElementById('r1cw5').innerHTML = coursejson1.courseWork[5].title;
          }
          if (cwnum>6 && coursejson1.courseWork.length>6){
            document.getElementById('r1cw6').innerHTML = coursejson1.courseWork[6].title;
          }
      }

      if(json.courses.length>2){
          document.getElementById('root2').innerHTML = json.courses[2].name;
          //In the next fetch line you must specify which course you want to access. Send me a slack message if you need help. -Alex
          const coursework2 = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[2].id+'/courseWork?access_token='+key)
          const coursejson2 = await coursework2.json();
          console.log(coursejson2);
          console.log(coursejson2.courseWork.length);
          if (cwnum>0 && coursejson2.courseWork.length>0){
            document.getElementById('r2cw0').innerHTML = coursejson2.courseWork[0].title;
          }
          if (cwnum>1 && coursejson2.courseWork.length>1){
            document.getElementById('r2cw1').innerHTML = coursejson2.courseWork[1].title;
          }
          if (cwnum>2 && coursejson2.courseWork.length>2){
            document.getElementById('r2cw2').innerHTML = coursejson2.courseWork[2].title;
          }
          if (cwnum>3 && coursejson2.courseWork.length>3){
            document.getElementById('r2cw3').innerHTML = coursejson2.courseWork[3].title;
          }
          if (cwnum>4 && coursejson2.courseWork.length>4){
            document.getElementById('r2cw4').innerHTML = coursejson2.courseWork[4].title;
          }
          if (cwnum>5 && coursejson2.courseWork.length>5){
            document.getElementById('r2cw5').innerHTML = coursejson2.courseWork[5].title;
          }
          if (cwnum>6 && coursejson2.courseWork.length>6){
            document.getElementById('r2cw6').innerHTML = coursejson2.courseWork[6].title;
          }
      }

      if(json.courses.length>3){
          document.getElementById('root3').innerHTML = json.courses[3].name;
          //In the next fetch line you must specify which course you want to access. Send me a slack message if you need help. -Alex
          const coursework3 = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[3].id+'/courseWork?access_token='+key)
          const coursejson3 = await coursework3.json();
          console.log(coursejson3);
          console.log(coursejson3.courseWork.length);
          if (cwnum>0 && coursejson3.courseWork.length>0){
            document.getElementById('r3cw0').innerHTML = coursejson3.courseWork[0].title;
          }
          if (cwnum>1 && coursejson3.courseWork.length>1){
            document.getElementById('r3cw1').innerHTML = coursejson3.courseWork[1].title;
          }
          if (cwnum>2 && coursejson3.courseWork.length>2){
            document.getElementById('r3cw2').innerHTML = coursejson3.courseWork[2].title;
          }
          if (cwnum>3 && coursejson3.courseWork.length>3){
            document.getElementById('r3cw3').innerHTML = coursejson3.courseWork[3].title;
          }
          if (cwnum>4 && coursejson3.courseWork.length>4){
            document.getElementById('r3cw4').innerHTML = coursejson3.courseWork[4].title;
          }
          if (cwnum>5 && coursejson3.courseWork.length>5){
            document.getElementById('r3cw5').innerHTML = coursejson3.courseWork[5].title;
          }
          if (cwnum>6 && coursejson3.courseWork.length>6){
            document.getElementById('r3cw6').innerHTML = coursejson3.courseWork[6].title;
          }
      }
      if(json.courses.length>4){
          document.getElementById('root4').innerHTML = json.courses[4].name;
          //In the next fetch line you must specify which course you want to access. Send me a slack message if you need help. -Alex
          const coursework4 = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[4].id+'/courseWork?access_token='+key)
          const coursejson4 = await coursework4.json();
          console.log(coursejson4);
          console.log(coursejson4.courseWork.length);
          if (cwnum>0 && coursejson4.courseWork.length>0){
            document.getElementById('r4cw0').innerHTML = coursejson4.courseWork[0].title;
          }
          if (cwnum>1 && coursejson4.courseWork.length>1){
            document.getElementById('r4cw1').innerHTML = coursejson4.courseWork[1].title;
          }
          if (cwnum>2 && coursejson4.courseWork.length>2){
            document.getElementById('r4cw2').innerHTML = coursejson4.courseWork[2].title;
          }
          if (cwnum>3 && coursejson4.courseWork.length>3){
            document.getElementById('r4cw3').innerHTML = coursejson4.courseWork[3].title;
          }
          if (cwnum>4 && coursejson4.courseWork.length>4){
            document.getElementById('r4cw4').innerHTML = coursejson4.courseWork[4].title;
          }
          if (cwnum>5 && coursejson4.courseWork.length>5){
            document.getElementById('r4cw5').innerHTML = coursejson4.courseWork[5].title;
          }
          if (cwnum>6 && coursejson4.courseWork.length>6){
            document.getElementById('r4cw6').innerHTML = coursejson4.courseWork[6].title;
          }
      } 
      if(json.courses.length>5){
          document.getElementById('root5').innerHTML = json.courses[5].name;
          //In the next fetch line you must specify which course you want to access. Send me a slack message if you need help. -Alex
          const coursework5 = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[5].id+'/courseWork?access_token='+key)
          const coursejson5 = await coursework5.json();
          console.log(coursejson5);
          console.log(coursejson5.courseWork.length);
          if (cwnum>0 && coursejson5.courseWork.length>0){
            document.getElementById('r5cw0').innerHTML = coursejson5.courseWork[0].title;
          }
          if (cwnum>1 && coursejson5.courseWork.length>1){
            document.getElementById('r5cw1').innerHTML = coursejson5.courseWork[1].title;
          }
          if (cwnum>2 && coursejson5.courseWork.length>2){
            document.getElementById('r5cw2').innerHTML = coursejson5.courseWork[2].title;
          }
          if (cwnum>3 && coursejson5.courseWork.length>3){
            document.getElementById('r5cw3').innerHTML = coursejson5.courseWork[3].title;
          }
          if (cwnum>4 && coursejson5.courseWork.length>4){
            document.getElementById('r5cw4').innerHTML = coursejson5.courseWork[4].title;
          }
          if (cwnum>5 && coursejson5.courseWork.length>5){
            document.getElementById('r5cw5').innerHTML = coursejson5.courseWork[5].title;
          }
          if (cwnum>6 && coursejson5.courseWork.length>6){
            document.getElementById('r5cw6').innerHTML = coursejson5.courseWork[6].title;
          }
      } 

      if(json.courses.length>6){
          document.getElementById('root6').innerHTML = json.courses[6].name;
          //In the next fetch line you must specify which course you want to access. Send me a slack message if you need help. -Alex
          const coursework6 = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[6].id+'/courseWork?access_token='+key)
          const coursejson6 = await coursework6.json();
          console.log(coursejson6);
          console.log(coursejson6.courseWork.length);
          if (cwnum>0 && coursejson6.courseWork.length>0){
            document.getElementById('r6cw0').innerHTML = coursejson6.courseWork[0].title;
          }
          if (cwnum>1 && coursejson6.courseWork.length>1){
            document.getElementById('r6cw1').innerHTML = coursejson6.courseWork[1].title;
          }
          if (cwnum>2 && coursejson6.courseWork.length>2){
            document.getElementById('r6cw2').innerHTML = coursejson6.courseWork[2].title;
          }
          if (cwnum>3 && coursejson6.courseWork.length>3){
            document.getElementById('r6cw3').innerHTML = coursejson6.courseWork[3].title;
          }
          if (cwnum>4 && coursejson6.courseWork.length>4){
            document.getElementById('r6cw4').innerHTML = coursejson6.courseWork[4].title;
          }
          if (cwnum>5 && coursejson6.courseWork.length>5){
            document.getElementById('r6cw5').innerHTML = coursejson6.courseWork[5].title;
          }
          if (cwnum>6 && coursejson6.courseWork.length>6){
            document.getElementById('r6cw6').innerHTML = coursejson6.courseWork[6].title;
          }
      }

      if(json.courses.length>7){
          document.getElementById('root7').innerHTML = json.courses[7].name;
          //In the next fetch line you must specify which course you want to access. Send me a slack message if you need help. -Alex
          const coursework7 = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[7].id+'/courseWork?access_token='+key)
          const coursejson7 = await coursework7.json();
          console.log(coursejson7);
          console.log(coursejson7.courseWork.length);
          if (cwnum>0 && coursejson7.courseWork.length>0){
            document.getElementById('r7cw0').innerHTML = coursejson7.courseWork[0].title;
          }
          if (cwnum>1 && coursejson7.courseWork.length>1){
            document.getElementById('r7cw1').innerHTML = coursejson7.courseWork[1].title;
          }
          if (cwnum>2 && coursejson7.courseWork.length>2){
            document.getElementById('r7cw2').innerHTML = coursejson7.courseWork[2].title;
          }
          if (cwnum>3 && coursejson7.courseWork.length>3){
            document.getElementById('r7cw3').innerHTML = coursejson7.courseWork[3].title;
          }
          if (cwnum>4 && coursejson7.courseWork.length>4){
            document.getElementById('r7cw4').innerHTML = coursejson7.courseWork[4].title;
          }
          if (cwnum>5 && coursejson7.courseWork.length>5){
            document.getElementById('r7cw5').innerHTML = coursejson7.courseWork[5].title;
          }
          if (cwnum>6 && coursejson7.courseWork.length>6){
            document.getElementById('r7cw6').innerHTML = coursejson7.courseWork[6].title;
          }
      }

      





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
    <p id = "r0cw0"></p>
    <p id = "r0cw1"></p>
    <p id = "r0cw2"></p>
    <p id = "r0cw3"></p>
    <p id = "r0cw4"></p>
    <p id = "r0cw5"></p>

    <p id = "root1"></p>
    <p id = "r1cw0"></p>
    <p id = "r1cw1"></p>
    <p id = "r1cw2"></p>
    <p id = "r1cw3"></p>
    <p id = "r1cw4"></p>
    <p id = "r1cw5"></p>

    <p id = "root2"></p>
    <p id = "r2cw0"></p>
    <p id = "r2cw1"></p>
    <p id = "r2cw2"></p>
    <p id = "r2cw3"></p>
    <p id = "r2cw4"></p>
    <p id = "r2cw5"></p>

    <p id = "root3"></p>
    <p id = "r3cw0"></p>
    <p id = "r3cw1"></p>
    <p id = "r3cw2"></p>
    <p id = "r3cw3"></p>
    <p id = "r3cw4"></p>
    <p id = "r3cw5"></p>

    <p id = "root4"></p>
    <p id = "r4cw0"></p>
    <p id = "r4cw1"></p>
    <p id = "r4cw2"></p>
    <p id = "r4cw3"></p>
    <p id = "r4cw4"></p>
    <p id = "r4cw5"></p>

    <p id = "root5"></p>
    <p id = "r5cw0"></p>
    <p id = "r5cw1"></p>
    <p id = "r5cw2"></p>
    <p id = "r5cw3"></p>
    <p id = "r5cw4"></p>
    <p id = "r5cw5"></p>

    <p id = "root6"></p>
    <p id = "r6cw0"></p>
    <p id = "r6cw1"></p>
    <p id = "r6cw2"></p>
    <p id = "r6cw3"></p>
    <p id = "r6cw4"></p>
    <p id = "r6cw5"></p>

    <p id = "root7"></p>
    <p id = "r7cw0"></p>
    <p id = "r7cw1"></p>
    <p id = "r7cw2"></p>
    <p id = "r7cw3"></p>
    <p id = "r7cw4"></p>
    <p id = "r7cw5"></p>
    
   

  </div>

export default LoginPage
