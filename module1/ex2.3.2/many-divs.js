const divs = document.querySelectorAll(".color-div");
const body = document.querySelector("body");
const style = document.querySelector("style");

divs.forEach((div) => {
    let zoom = false;
  div.addEventListener("click", (event) => {
    if(!zoom){
    event.target.style.width = "100px";
    event.target.style.height = "100px"
    event.target.innerHTML = event.target.style["background-color"];
    zoom = true
    }else{
    event.target.style.width ="50px"
    event.target.style.height = "50px"
    event.target.innerHTML = "";
    zoom = false
    }   
  });


  
  
});
//body.addEventListener("mouseover",(event)=> divs.keys())
