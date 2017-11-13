import React from 'react';
import Link from 'gatsby-link';
import Cookies from 'universal-cookie';
import "isomorphic-fetch";

const cookies = new Cookies();

var name = (cookies.get('name'));
var key = (cookies.get('key'));
console.log(key);

// j is which class it is. It goes from 0-7.
// i is the class work the maximum is 6 (0-5)

    
class Andrew {
  async loadTest() {
    try {
      const response = await fetch('https://classroom.googleapis.com/v1/courses?access_token=' + key);
      const json = await response.json();     
      var cwnum = 4;//var to change how many classworks show up
      for(var j = 0;j<json.courses.length;j++){
          var rt = 'root'+j; // classname
          document.getElementById(rt).innerHTML = json.courses[j].name;
          const coursework = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[j].id+'/courseWork?access_token='+key)
          const coursejson = await coursework.json();
          for (var i=0; i < coursejson.courseWork.length; i++ ){
            if (i<cwnum){
              var classwk = 'r'+j+'cw'+i; // homework / classwork name
              document.getElementById(classwk).innerHTML = coursejson.courseWork[i].title;
            }
          }
          
      }
    } catch(err) {
        console.log(err);
    }
  }
}

var an = new Andrew();
an.loadTest();

const LoginPage = () =>
  <div>
    <h1>Welcome {name}</h1>

    <p id = "root0"></p>
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
