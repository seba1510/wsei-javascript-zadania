<script>
document.addEventListener("DOMContentLoaded",fooo);

function fooo(){
   var counter=0;
   var foo =document.getElementsByTagName("button");
   
   for(i=0;i<foo.length;i++)
   {
       foo[i].addEventListener("click",counter);
   }
   function counter()
   {
counter++;
document.getElementsByClassName("counter")[0].innerHTML=licznik;
   }

}
</script>
