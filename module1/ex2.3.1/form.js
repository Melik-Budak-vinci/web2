let form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(e.target)
    const souhait = form.elements.souhait.value;
    if(souhait==="")return;
    form.innerHTML = souhait
})