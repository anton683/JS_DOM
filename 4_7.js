let but = document.querySelector(".copy");
let clone = but.cloneNode(true);
but.onclick = function() {
    document.body.appendChild(clone)
}
