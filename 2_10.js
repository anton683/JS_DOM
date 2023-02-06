const values = ["велосипед", "ролики", "лыжи"];
let d1 = document.querySelectorAll('#div1 > p')
let d2 = document.querySelector('#div2')


d1.forEach(elem => {
        values.forEach(el => {
            if (elem.innerText === el) {
                d2.append(elem) 
             } else {
            elem
             }
        })    
    })