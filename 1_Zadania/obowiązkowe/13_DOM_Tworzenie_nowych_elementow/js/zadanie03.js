<script>
var element=document.getElementsByClassName("button");

for(let i=0;i<element.length;i++)
	{
	element[i].addEventListener("click",foo);
	}

function foo()
	{
	var tak=this.getAttribute("id");
    this.parentElement.removeChild(this);
	}
</script>
