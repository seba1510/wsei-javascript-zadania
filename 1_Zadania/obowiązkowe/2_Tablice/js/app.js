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
