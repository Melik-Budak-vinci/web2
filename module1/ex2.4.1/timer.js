const div = document.querySelector(".div")
const button = document.querySelector(".button");
let timeoutID;
let click=0
let dated;
button.addEventListener("mouseover",gamelost)
button.addEventListener("click",gameWin)
function gamelost(){
    timeoutID = setTimeout(()=>{
     div.innerHTML = "Game over, you did not click 10 times within 5s !"
    },5000)
    dated = new Date();
}
function gameWin(){
    click++;
    if(click>=10){
    clearTimeout(timeoutID);
    let timer = new Date() - dated
    div.innerHTML =  "You win ! You clicked 10 times within"+timer +"ms"

    }

}
