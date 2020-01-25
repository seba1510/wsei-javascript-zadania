document.addEventListener("DOMContentLoaded", () => {
	var select = document.querySelector("select");
    var images = document.querySelectorAll("img");

    Image(images,2);

    select.addEventListener("change",() => {
        if(select.selectedIndex==0)
            Image(images,2);
        if(select.selectedIndex==1)
            Image(images,0);
        if(select.selectedIndex==2)
            Image(images,1);
    })
})

function Image(images, index) {
    for(let i=0; i<images.length; i++)
        if(i===index)
            images[i].style.display = "inline-block";
        else
            images[i].style.display = "none";
}
