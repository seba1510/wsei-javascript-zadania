document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
//zadanie 0
function getDatasInfo(links){
var tab=[];
for(i=0;i<links.length;i++)
{
    tab.push(links[i].getAttribute("data-color"));
}
console.log(tab);
return tab;
    }



//zadanie 1
    var homeElement = document.getElementById("home");
    var oferts = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

console.log("tagName: "+homeElement.tagName+" className: "+homeElement.className);
for(let i=0;i<oferts.length;i++)
{
    console.log("className: "+oferts[i].className +" tagName: "+oferts[i].tagName);
}
console.log("className: "+banner.className+" tagName: "+banner.tagName);
for(let i=0;i<oferts.length;i++)
{
    console.log("className: "+blocks[i].className+" tagName: "+blocks[i].tagName);
}
for(let i=0;i<oferts.length;i++)
{
    console.log("className: "+links[i].className+" tagName: "+links[i].tagName);
}
    
	
	
//zadanie 2
var blocks = document.querySelectorAll(".block");
for(let i=0;i<blocks.length;i++)
{
    console.log("innerHTML "+blocks[i].innerHTML);
    console.log("outerHTML "+blocks[i].outerHTML);
}
for(let i=0;i<blocks.length;i++)
{
blocks[i].innerHTML="Nowa wartość diva o klasie blocks";
}
for(let i=0;i<blocks.length;i++)
{
    console.log("innerHTML "+blocks[i].innerHTML);
    console.log("outerHTML "+blocks[i].outerHTML);
}

//zadanie 3
   
var foo=document.getElementById("mainFooter");

    function getId(foo)
	{ 
        return foo.id;
    }
    getId(foo);


//zadanie 4
var childElements = document.querySelector(".oferts").children;
function getTags(childElements){
var tab=[];
for(let i=0;i<childElements.length;i++){
    tab.push(childElements[i]);
}
return tab;
}
getTags(childElements);

//zadanie 5
var banner = document.querySelector(".ban");

function getClassInfo(banner){
    console.log(banner);
var tab=[];
for(let i=0;i<banner.length;i++)
{
    tab.push(banner[i]);
}
return tab;

}
console.log(getClassInfo());


//zadanie 6
var elem=document.getElementsByTagName("nav")[0].getElementsByTagName("li");

function setDataDirection(elem){
    for(let i=0;i<elem.length;i++)
	{
        elem[i].setAttribute('data-direction','top');
    }
}
setDataDirection(elem);

});
