<script>
var element1=document.getElementsByClassName("deleteBtn");

for(let i=0;i<element1.length;i++)
{
    element1[i].addEventListener("click",foo);
}


function foo()
{
   var fos=this;
   fos=fos.parentElement.parentElement;
   fos.parentElement.removeChild(fos);
}

</script>
