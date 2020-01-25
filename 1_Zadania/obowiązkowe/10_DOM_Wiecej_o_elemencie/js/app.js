document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
//zadanie 0

var elements=document.getElementsByClassName('exercise ex5')[0].getElementsByTagName('li');;
for(let i=0;i<elements.length;i++)
	{
		if(i%2==0)
			{
			elements[i].style.backgroundColor="green";
			}
		else
			{ 
			continue;
			}
	}	

elements[4].style.fontWeight="bold";

for(let i=0;i<elements.length;i++)
{
    if(i%3==0)
		{
		elements[i].style.textDecoration="underline overline";
		}
	else 
		{ 
         continue;
		}
}




//zadanie 1
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("edge")[0].style.backgroundImage="url('edge.png')";
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("edge")[0].parentElement.getElementsByTagName("h3")[0].innerHTML="edge";
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("edge")[0].parentElement.getElementsByTagName("a")[0].innerHTML="edge";
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("edge")[0].parentElement.getElementsByTagName("a")[0].href="https://www.microsoft.com/pl-pl/windows/microsoft-edge";

document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("firefox")[0].style.backgroundImage="url('firefox.png')";
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("firefox")[0].parentElement.getElementsByTagName("h3")[0].innerHTML="firefox";
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("firefox")[0].parentElement.getElementsByTagName("a")[0].innerHTML="firefox";
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("firefox")[0].parentElement.getElementsByTagName("a")[0].href="https://www.mozilla.org/pl/firefox/new/";

document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("chrome")[0].style.backgroundImage="url('chrome.png')";
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("chrome")[0].parentElement.getElementsByTagName("h3")[0].innerHTML="chrome";
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("chrome")[0].parentElement.getElementsByTagName("a")[0].innerHTML="chrome";
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("chrome")[0].parentElement.getElementsByTagName("a")[0].href="https://www.google.com/intl/pl_pl/chrome/";
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("chrome")[0].style.width="100px";



//zadanie 2

var name= document.getElementById("name");
name.innerHTML="Sebastian";

var color =document.getElementById('fav_color');
color.innerHTML="Zielony";

var meal =document.getElementById('fav_meal');
meal.innerHTML="pizza";


//zadanie 3

document.getElementsByClassName("exercise ex3")[0].getElementsByTagName("ul")[0].classList.add("menu");

var elements =document.getElementsByClassName("exercise ex3")[0].getElementsByTagName("li");
for(let i=0;i<elements.length;i++)
{
    elements[i].classList.add("menuElement");
}

var elements =document.getElementsByClassName("exercise ex3")[0].getElementsByTagName("li");
for(let i=0;i<elements.length;i++)
{
    elements[i].classList.remove("error");
}



//zadanie 4
var elements=document.getElementsByClassName("exercise ex4")[0].getElementsByTagName("li");
for(let i=0;i<elements.length;i++)
{
elements[i].setAttribute("data-id",i+1);
}
});
