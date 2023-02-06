let pp = document.querySelectorAll("p");

pp.forEach(element => {
  if (element.innerText.includes("Delete")){
element.remove()
  }  
});