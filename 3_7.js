const countries = ["Armenia", "Russia", "Germany", "France", "Georgia"];

let select = document.querySelector('select');

 countries.forEach(element => {
        let option = document.createElement('option')
        option.value = element.slice(0,2).toLowerCase()
        option.innerText = element
        select.append(option)
    });

