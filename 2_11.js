const elems = [];

let id_root = document.getElementById("root");

for (let i in tasks) {

  elems[i] = document.createElement("p");

  elems[i].innerText = tasks[i];

  id_root.append(elems[i]);

  id_root.appendChild(elems[i]);
}