"use strict";

// -------------------------------------------------------------------------------------------------------
// Challenge 01

// Important:
// To solve these challenges you have use (for in ,for of) or (Object.keys ,Object.value, Object.entries )

// Resources:
// for in : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// for of : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// You given an object that contain name
// and age of some customers as below :

// {
//     "Romio Joliat": 35,
//     "Mario Ristrova": 39,
//     "Sofia firnando": 50,
// }

// You have to return an array of strings that follow the below syntax
//
// the string format is "Customer Name :*** *** , Age :**"
// ['Customer Name :Romio Joliat , Age :35', 'Customer Name :Mario Ristrova , Age :39', ... ]

// -------------------------------------------------------------------------------------------------------

const customerAndAge = (obj) => {
    let newArr = [] ;
    for ( let property in obj){
        newArr.push(`Customer Name :${property} , Age :${obj[property]}`)


    }
    return newArr
};

// -------------------------------------------------------------------------------------------------------
// Challenge 02

// Write a function called getRecipeKey that take recipe info object and return an array of recipe info as strings
// as in the example

// Ex:-
// Input:
// let recipeInfo = {
//   name: "pizza",
//   ingredients: ["bread", "tomato", "chicken", "mayo"],
//   cookTime: "twoHours",
//   price: "25$",
// };
//
// Output:
// ["name: pizza", "ingredients: bread,tomato,chicken,mayo", "cookTime: twoHours", "price: 25$"]
//
// Note:
// You can solve this challenge by using Object.entries

// -------------------------------------------------------------------------------------------------------

const getEntries = (obj) => {
  let arr =[];
  for (let [key, value] of Object.entries(obj)) {
    arr.push(`${key}: ${value}`)
  }
  return arr;

};

// -------------------------------------------------------------------------------------------------------
// Challenge 03

// Write a function named getCourseName that returns object of 2 new arrays
// first one is containing the names of all of the courses in the data set.
// second one is containing the names of all the students
// -------------------------------------------------------------------------------------------------------

const courses = [
  {
    course: 'Java',
    Instructor: 'David',
    Students: ['Lincoln', 'Ruth', 'Briana', 'Suzy', 'Greta'],
    GroupName: 'Stars',
  },
  {
    course: 'JavaScript',
    Instructor: 'Van',
    Students: ['Alphonso', 'Daley', 'Dax', 'Karter', 'Jorja'],
    GroupName: 'Nerd-ware',
  },
  {
    course: 'Python',
    Instructor: 'Delaney',
    Students: ['Barney', 'Kal??', 'Alisha'],
    GroupName: 'Whats-Up',
  },
  {
    course: 'DotNet',
    Instructor: 'Keanna',
    Students: ['Oli', 'Gisselle', 'Pru'],
    GroupName: 'Lol',
  },
];

const getInfo = (arr) => {
  let coursesName = [];
  let studentsName = [];
    
  arr.forEach(element => {
    
    coursesName.push(element.course)
    for( let i = 0 ; i<element.Students.length ; i ++){
    studentsName.push(element.Students[i])
  
    } 
}); 

  return { coursesName, studentsName };
};

//  ------------------------------------------------------------------------------------------------------
// Challenge 04

// The Head manager wants to get a more organized info about some students, he wants you to find the students from the courses dataset
// and return their info following the below syntax
//
// Input: ['Kal??', 'Alisha','Alphonso', 'Briana']
// Output: 
// [
//   {
//     Student: 'Kal??',
//     course: 'Python'
//   },
//   ...
// ]

//  ------------------------------------------------------------------------------------------------------

const getStudents = (arr) => {
  let newArr =[]
  
  for(let i = 0 ; i<arr.length ; i++){
      
    var obj ={
      Student : "",
      course: "",
      }
    courses.forEach(course => {
     
      course.Students.forEach(info => {
        if(info == arr[i]){
         obj.Student = arr[i];
          obj.course = course.course ;
        
        newArr.push(obj);
        }
      });
    });
  }
  return newArr;

};

module.exports = {
  customerAndAge,
  getEntries,
  courses,
  getInfo,
  getStudents,
};