let square = document.querySelector("#square");

square.onclick = function(event) {
 square.style.width = parseFloat(square.style.width)*0.9 + "px";
 square.style.height = parseFloat(square.style.height)*0.9 + "px";
}