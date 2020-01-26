<script>
var element=document.getElementsByClassName("button");

for(let i=0;i<element.length;i++)
	{
	element[i].addEventListener("click",foo);
	}

function foo()
	{
    this.parentElement.removeChild(this);
	}
</script>
