let but = document.querySelector("#delete");

let points = document.querySelector("#points");

but.onclick = () => points.removeChild(points.lastElementChild);