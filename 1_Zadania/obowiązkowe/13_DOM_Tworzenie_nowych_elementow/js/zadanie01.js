<script>
var counter=1;
document.getElementsByClassName("button")[0].addEventListener("click",foo);

function foo()
{
var tak=document.getElementsByClassName("menu")[0];
var fooo=document.createTextNode("Element "+counter);
var NewElement=document.createElement("li");
NewElement.appendChild(fooo);
tak.appendChild(NewElement);
counter++
console.log("tak");
}
</script>
