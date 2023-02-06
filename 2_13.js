let id_tasks = document.querySelector("#tasks");
let teg_li = id_tasks.getElementsByTagName("li");

let max = 0;
for(i = 0; i < teg_li.length; i++){
if(teg_li[i].textContent.length > max){
max = teg_li[i].textContent.length;
id_tasks.appendChild(teg_li[i]);
}
}