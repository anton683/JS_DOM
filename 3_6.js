let nums = document.querySelector("#numbers");

for ( i = 10; i <=550; i+=10 )  {

let option = document.createElement("option");

    option.innerText = i;
	option.value = i;
    nums.appendChild(option);
}




