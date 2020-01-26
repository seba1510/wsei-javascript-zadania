<script>
    
   const buttons = Array.from(document.getElementsByClassName("deleteBtn"));
    buttons.forEach(b => b.addEventListener('click', function(){
        const trSelector = this.parentElement.parentElement;
        trSelector.remove();
    }))

</script>
