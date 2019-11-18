//Zadanie 0
function checkArray(arr){
    var result = [];
    for(let i=0; i < arr.length; i++){
        if (arr[i][0] %2 == 0)
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
	
	
//Zadanie 1

var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];
console.log(task1Array[3][2]);
console.log(task1Array[2].length);
console.log(task1Array[4][2]);

//Zadanie 2
var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
for(let i = 0; i <task2Array[0].length; i++){
	console.log(task2Array[0][i]);
	}
for(let j = 0; j<task2Array.length; j++){
	console.log(task2Array[j].length);
	}
for(let g=0; g<task2Array.length; g++){
	for(let h=0; h<task2Array[g].length; h++){
	console.log(task2Array[g][h];
	}
	}
	
//Zadanie 3




