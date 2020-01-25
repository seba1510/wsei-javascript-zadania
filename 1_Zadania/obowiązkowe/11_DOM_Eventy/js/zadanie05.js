<script>
document.addEventListener("DOMContentLoaded",fooo);
function fooo(){

var foo=document.getElementsByClassName("box");
for(i=0;i<foo.length;i++)
{
    foo[i].addEventListener("click",foooo);
}

function foooo()
{
var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
this.style.backgroundColor=randomColor;
}
}
</script>
