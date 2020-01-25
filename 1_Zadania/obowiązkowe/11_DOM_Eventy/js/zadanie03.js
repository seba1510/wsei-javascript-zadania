<script>
document.addEventListener("DOMContentLoaded",fooo);
function fooo(){
    var counter1=0;
    var counter2=0;
    var counter3=0;

    document.getElementById("button1").addEventListener("click",function(){
    counter++;
    document.getElementsByClassName("counter")[0].innerHTML=counter1; });
	
    document.getElementById("button2").addEventListener("click",function(){
    counter2++;
    document.getElementsByClassName("counter")[1].innerHTML=counter2; });
	
    document.getElementById("button3").addEventListener("click",function(){
    counter++;
    document.getElementsByClassName("counter")[2].innerHTML=counter3; });

}
</script>
