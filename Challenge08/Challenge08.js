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

//// -------------------------------------------------------------------------------------------------------

const customerAndAge = (obj) => {
 
  let arr = [];
  for (const customerInfo in obj) {
    arr.push(`Customer Name :${customerInfo} , Age :${obj[customerInfo]}`);
  }
  return arr;
  }
      
 

 

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
  // write your code here
  let result = [];
  for (let i = 0; i < Object.entries(obj).length; i++) {
    let recipeInfo  = "";
    if (typeof Object.entries(obj)[i][1] == "object") {
      typeof Object.entries(obj)[i][1].forEach((recipeElement) => {
        recipeInfo  += `${recipeElement},`;
      });
      result.push(`${Object.entries(obj)[i][0]}: ${recipeInfo.slice(0, -1)}`);
    } else {
      result.push(`${Object.entries(obj)[i][0]}: ${Object.entries(obj)[i][1]}`);
    }
  }
  return  result ;
 
  

};

// -------------------------------------------------------------------------------------------------------
// Challenge 03
// Optional:
// Write a function named getCourseName that returns object of 2 new arrays
// first one is containing the names of all of the courses in the data set.
// second one is containing the names of all the students
 
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
    Students: ['Barney', 'Kalé', 'Alisha'],
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
  // write your code here
  arr.forEach((stuElement) => {
    coursesName.push(stuElement.course);
  });
  for (let i = 0; i <= arr.length - 1; i++) {
    arr[i].Students.forEach((Student => studentsName.push(Student)));
  }

  return { coursesName, studentsName };
}

//  ------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:
// The Head manager wants to get a more organized info about some students, he wants you to find the students from the courses dataset
// and return their info following the below syntax
//
// Input: ['Kalé', 'Alisha','Alphonso', 'Briana']
// Output: 
// [
//   {
//     Student: 'Kalé',
//     course: 'Python'
//   },
//   ...
// ]

//  ------------------------------------------------------------------------------------------------------

const getStudents = (arr) => {
  // write your code here
  let outputArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    let result = courses.filter((stuElement) => {
      return stuElement.Students.indexOf(arr[i]) >= 0;
    });
    outputArr.push({
      Student: arr[i],
      course: result[0].course,
    });
  }
  return outputArr;
    }
 

module.exports = {
  customerAndAge,
  getEntries,
  courses,
  getInfo,
  getStudents,
};


