//Zadanie 0
function distFromAverage(numberArray){
var average = 0;
numberArray.forEach(element => {
        average += element;
});
average = average / numberArray.length;
console.log(average);
var returnarray = [];
numberArray.forEach(element => {
    returnarray.push(element - average);
});
return returnarray;
}

distFromAverage([1,2,3,4,5,6,7])

//Zadanie 1
let fruits = ['apple', 'orange','banana','peach','pear'];
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
for(let count = 0; count < fruits.length; count++){
    console.log(fruits[count]);
}

//Zadanie 3
function printTable(array) {
    for(var i = 0; i < array.length; i++){
        console.log(array[i])
    }  
}

//Zadanie 4

function multiply(array) {
    var temp = 1;
    for(let i=0; i<array.length; i++){
        temp *= array[i];
    }
    console.log(temp);
}

//Zadanie 5

function getEvenAverage(array){
    let arg = 0;
    let evennumber = 0;
    array.forEach(element => {
        if(element %2==0){
        arg+=element;
        evennumber++;
        }
    });
    console.log(arg/evennumber);
}
console.log(getEvenAverage ([1,2,3,4,5,6,7,8]));

//Zadanie 6

function sortArray(array){
var tab = array;
tab.sort((a,b)=>a-b);
return(array);
}
console.log(sortArray([12,5,3,8,10]));

//Zadanie 7

function Addarrays(array, array2){
    var counter = array.length > array2.length?array.length:array2.length;
   var result = [];
   for(var i =0;i<counter;i++){
       var firstNum=array[i]!=null?array[i]:0;
       var secondNum=array2[i]!=null?array2[i]:0;
       result[i] = firstNum + secondNum;
   }
   return result;
}
Addarrays([1,2,3,4],[2,1,6,7]);

