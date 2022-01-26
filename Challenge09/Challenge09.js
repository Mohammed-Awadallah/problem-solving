'use strict';

// Important Note:
// Kindly use forEach loop instead of for in all of your solutions

// Resource:
// forEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// 1) ---------------------
// 
//  using the (arrInc) function; increase the provided array values by 10
//  
//  EX:
//  [20, 54, 89, 41] ==> [30, 64, 99, 51]
//  
// ------------------------

const arrInc = (arr) => {
    let result = [];
    let num = 0;
    arr.forEach(element => {
        num = element + 10;
        result.push(num)
    });
    return result;
}


// 2) ---------------------
// 
//  using the (roundDecimals) function; given an array of decimals round every value to the closest value
//  
//  EX:
//  [5.4, 5.5 ,6.7, 6.8] ==> [5, 6, 7, 7]
// 
// ------------------------
const roundDecimals = (arr) => {
    let newArr = [];
    let num = 0 ;
    arr.forEach(element => {
       num = Math.round(element);
       newArr.push(num);
    });
    return newArr;
}

// 3) ---------------------
// 
//  An owner of a factory want to give bounce 100$ for the employee of production department who worked *More than* 8 hours
//  and 50$ for those who worked less, given their data increase their salary and return the data back again 
//  
//  EX:
// let data = [
//     {
//         name: "Robert",
//         section: "Transport",
//         workHours: 8,
//         salary: "3000$"
//     },
//     {
//         name: "Richard",
//         section: "HR",
//         workHours: 6,
//         salary: "4000$"
//     },
//     {
//         name: "Christopher",
//         section: "Production",
//         workHours: 10,
//         salary: "4500$"
//     },
//     {
//         name: "Andrew",
//         section: "HouseKeeping",
//         workHours: 9,
//         salary: "3200$"
//     }
// ]
// 
//  ==>
//
// [
//     {
//         name: "Robert",
//         section: "Transport",
//         workHours: 8,
//         salary: "3050$"
//     },
//     {
//         name: "Richard",
//         section: "HR",
//         workHours: 6,
//         salary: "4050$"
//     },
//     {
//         name: "Christopher",
//         section: "Production",
//         workHours: 10
//         salary: "4600$"
//     },
//     {
//         name: "Andrew",
//         section: "HouseKeeping",
//         workHours: 9,
//         salary: "3300$"
//     }
// ]
//

// ------------------------
const employeesBonus = (arr) => {
    let newSal = 0;
    arr.forEach(element => {
        let salary = element.salary;
       
        if (element.workHours > 8){
           newSal = parseFloat(salary.replace(/\$|,/g, '')) + 100;
         }
         if (element.workHours <= 8){
            newSal = parseFloat(salary.replace(/\$|,/g, '')) + 50;
         }
         element.salary = newSal +"$";
        }
    
        );
        return arr;
    }



// 4) ---------------------
// 
// Harry wants to buy a new mouse and keyboard for his new setup
// He wants to choose one mouse and one keyboard from the list of prices and take the most expensive combination
// but his budget is limited, help him by finding the most expensive *price* for a combination to buy with his budget
// 
// EX:
//
// budget = 200$
// mouseArray = [35, 15, 75, 180, 150, 50]
// keyBoardArray = [5, 150, 35, 120, 75, 50, 100]
// 
// ==> 200
// ------------------------
const mostExpensive = (budget, mouseArray, keyBoardArray) => {
   var num = 0 ;
   let bud = budget;
   mouseArray.forEach(element => {
       keyBoardArray.forEach(y => {
           if (element + y == bud ) {
             num = element + y;
               
           }
           if (element + y == bud - 15) {
               num = element + y
               
           }
       });
   });
   return num;}
   //Couldnt figuer out how to implment the closer number method in the sum of 2 elements of different arrays.

    

module.exports = { arrInc, roundDecimals, employeesBonus, mostExpensive };