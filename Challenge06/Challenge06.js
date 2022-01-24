'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//  
// ------------------------
const arr =[12, 32, 22, 45, 78, 12, 50];

const findMax = (arr)=>{
    let max=arr[0];
    for (let i=0;i<arr.length;i++)
    {
        if (max<arr[i])
        max=arr[i]
    }
   
    return max;
    

}
// 2) ---------------------
// 
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//  
// ------------------------
const arr2 =[20, '234', 'car', 41, 20, 'chair']
const sumNums = (arr)=>{
    let sum;
     for(let i=0 ;i<arr2.length;i++)
     {
         if  (typeof(arr2[i] === "number" ))
         {
             sum+=arr2[i];
         }
     }
    return sum;
}

// 3) ---------------------
// 
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
// 
// ------------------------
const arr3=['C#', 'JS', 'Ruby','Python' ];
var arrLength=arr3.length/2;
const reverseArray = (arr3)=>{
    for (let i=0 ;arrLength;i++)
    {
arr3[i],arr3[arrLength-i-1]=arr3[arrLength-i-1],arr3[i]
    }
  return(arr3[i])
 }

module.exports = {findMax , sumNums, reverseArray};