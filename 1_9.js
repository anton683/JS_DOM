let aaa = document.getElementsByClassName("numeric");

for ( let el of aaa )  {

    if (+el.innerHTML < 0) {
        el.innerHTML = "<b>" + el.innerHTML  + "</b>";
    }
}