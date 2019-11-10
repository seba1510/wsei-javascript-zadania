//Zadanie 1

function checkArray(arr){
    var result = [];
    for(let i=0; i < arr.length; i++){
        if (arr[i,0] %2 == 0)
        {
        result[i] = true;
        }
        else   
        {
        result[i] = false;
        }
        }
return result;
}
checkArray(arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
    ]);


var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
