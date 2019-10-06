function counterhello (number) {
var count = 0;
var intervalID = setInterval(() => {
   count ++;
   console.log('Hello',count);
   if(count === number){
    clearInterval(intervalID);
   }
}, 500);
}

counterhello(5)

