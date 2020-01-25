var menu = document.querySelector("#menu");
var paragraf = document.querySelector("p");

menu.classList.add("menu");
paragraf.innerHTML = "A to jest paragraf w zadaniu 1";

//DOMContentLoaded pokazuje czy element został wczytany.
//bez dodania eventu, skrypt pracuje na dokumencie który jest nie wczytany - błąd.
