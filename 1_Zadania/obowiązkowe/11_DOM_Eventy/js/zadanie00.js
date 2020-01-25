var foo=document.getElementsByClassName("parent");
for(i=0;i<foo.length;i++)
{
    foo[i].addEventListener("mouseover",fooOver);
    foo[i].addEventListener('mouseout',fooOut);
}
function fooOver()
{
    this.getElementsByClassName("children")[0].style.display="block";
}
function fooOut()
{

    this.getElementsByClassName("children")[0].style.display="none";
}
