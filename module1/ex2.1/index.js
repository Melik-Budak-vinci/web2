const message = "This is the best moment to have a look at this website !"

function addDateTime(message){
    const date=new Date();
    return date.toLocaleDateString()+" "+date.toLocaleTimeString()+" "+message 
}
alert(addDateTime(message))

let body = document.querySelector("#body");
let counterdiv = document.querySelector('#counter')
let messageCount = document.querySelector("#message")
let count =0;
body.addEventListener('click' , () => {
    count++;
    if(count > 5 && count < 9 ){
        messageCount.innerHTML = "Bravo, bel échauffement !"
    }else if(count >9) { 
        messageCount.innerHTML = "Vous êtes passé maître en l'art du clic !"
    }
    counterdiv.innerHTML = count;
})