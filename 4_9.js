let div1 = document.getElementById("div1");
let p1 = div1.querySelectorAll("p");

let div2 = document.getElementById("div2");
let p2 = div2.querySelectorAll("p");

for (let i = 0; i < p1.length; i++) {
    p1[i].addEventListener('click', (event) => {
        div2.appendChild(p1[i]);
        p1[i].remove;
        
    })
}

for (let i = 0; i < p2.length; i++) {
    p2[i].addEventListener('click', (event) => {
        div1.appendChild(p2[i]);
        p2[i].remove;
        
    })
}