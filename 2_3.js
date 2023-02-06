let ul = document.getElementsByTagName("ul");

let new_element = document.createElement("li");
new_element.innerText = "Велосипед";

ul[0].prepend(new_element);