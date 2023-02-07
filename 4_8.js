let p = document.querySelectorAll("p");

p.forEach(el => {
     el.addEventListener("click", function() {
            el.innerText = +el.innerText + 1;
         })
     }) 
     
/*
     let p = document.querySelectorAll("p");

     p.forEach(el => {
          el.onclick = function() {
                 el.innerText = +el.innerText + 1;
              }
            }
              )
           
     */     


/*
     let p = document.querySelectorAll("p");

     p.forEach(el => {
          el.onclick = () => el.innerText = +el.innerText + 1;
              });
           
     */                   

              