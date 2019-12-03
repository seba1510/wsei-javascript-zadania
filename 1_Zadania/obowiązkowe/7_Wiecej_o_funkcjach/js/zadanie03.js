//Przy takiej definicji funkcji nie ma znaczenie miejsce wywoływania funkcji

hello();
function hello(){
	console.log("Cześć")
}
hello();

//W tym przypadku wywołanie funkcji działa tylko i wyłącznie po deklaracji funkcji w zmiennej hello
console.log(hello());
var hello = function(){
	return "Witaj";
}
console.log(hello());
