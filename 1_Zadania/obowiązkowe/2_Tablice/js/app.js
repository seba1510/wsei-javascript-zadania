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
