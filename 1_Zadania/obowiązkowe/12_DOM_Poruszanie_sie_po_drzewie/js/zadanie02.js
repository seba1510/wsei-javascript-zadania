<script>
var foo=document.getElementsByClassName("button");
for(i=0;i<foo.length;i++)
{
    foo[i].addEventListener("click",fooo)
}
function fooo(){
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    this.parentElement.style.backgroundColor=randomColor;
}
</script>
