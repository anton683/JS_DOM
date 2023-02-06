let photo = document.getElementById("photo");

photo.innerHTML = `<img src=${photo.textContent}>`;

let image = photo.querySelector("img");

image.style.width = "100px";
image.style.height = "100px";