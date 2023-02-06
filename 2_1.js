let new_element = document.createElement("p");
new_element.innerText = "Ура! Мой скрипт отработал верно!";

let root = document.querySelector("#root");
root.appendChild(new_element);