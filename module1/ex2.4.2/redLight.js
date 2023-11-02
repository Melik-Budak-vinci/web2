let light = document.querySelectorAll('div')





    
    



const red = document.querySelector('.red')
const orange = document.querySelector('.orange')
const green = document.querySelector('.green')
let color;
let phase=1
setInterval(()=>{
        if(phase==1){
            orange.style['background-color']='white'
            red.style['background-color']='red'
            color='red'
        }else
        if(phase==2){
            red.style['background-color']='white'
            orange.style['background-color']='orange'
            color='orange'
        }else
        if(phase==3){
            orange.style['background-color']='white'
            green.style['background-color']='green'
           
        }
        if(phase==4){
            green.style['background-color']='white'
            orange.style['background-color']='orange'
            phase=0
        } 
        phase++
    }
,2000)