<script >
var element=document.getElementsByClassName("button");

for(i=0;i<element.length;i++)
    {
      element[i].addEventListener("click",foo);
    }
function foo(){
    if(this.nextElementSibling.style.visibility=="hidden"){
    this.nextElementSibling.style.visibility="visible";}
    else{this.nextElementSibling.style.visibility="hidden"}
    }
</script>
