let rainbow = document.querySelector("#rainbow");

if (rainbow.innerText >=1 && rainbow.innerText <=9 ) {
    rainbow.style.color = "#c0392b" ;
} else if (rainbow.innerText >=10 && rainbow.innerText <=20 ) {
    rainbow.style.color = "#e17055" ;
} else {
    rainbow.style.color = "#fdcb6e";
}