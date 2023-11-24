const main = document.querySelector('main');

function pageAboutUS () {
    const div = document.createElement('div');
    const p = document.createElement('p');
    div.className = 'text-center'
    p.innerText = '-Melik Budak \n-Budak Melik'
    
    div.appendChild(p);
   
    main.innerHTML= '';
   
    main.appendChild(div)
}

export default pageAboutUS;