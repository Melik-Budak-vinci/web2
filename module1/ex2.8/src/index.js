import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import harry from './img/harry potter.jpg'
import SAO from './img/Sword Art Online.jpg'

const main = document.querySelector('main');
homePage();
function homePage(){
    main.innerHTML = ''
    addTableAsNode();
    renderPhoto(harry);
    renderPhoto(SAO)
}



function buttonAboutUs(page){
    const button = document.createElement('button');
    button.className = 'button --bs-danger';
    button.innerText = 'about us';

    main.appendChild(button);

    button.addEventListener('click',page)

}
function pageAboutUS () {
    const div = document.createElement('div');
    const p = document.createElement('p');
    div.className = 'text-center'
    p.innerText = '-Melik Budak \n-Budak Melik'
    
    div.appendChild(p);
   
    main.innerHTML= '';
    buttonAboutUs(homePage);
    main.appendChild(div)
}
function renderPhoto(photo){
    const img = document.createElement('img');
    img.src = photo;
    img.style.width = '250px'
   
    main.appendChild(img);

}

function addTableAsNode(){
    const table = createWrapperTable();
    main.appendChild(table)
}

function createWrapperTable(){
    const container = document.createElement('div');
    const divRow = document.createElement('div');
    container.className = 'container';
    divRow.className = 'row';
    container.appendChild(divRow);

    const divHead = document.createElement('div');
    divHead.className = 'col bg-info border border-primary'
    container.innerText = 'Header'
    divRow.appendChild(divHead);
    
    
    const divRowBody = document.createElement('div')
    divRowBody.className = 'row'
    container.appendChild(divRowBody);

    const divBody = document.createElement('div');
    divBody.className = 'col-12 col-lg-2 bg-info border border-primary'
    divBody.innerText = 'Menu within body part';

    const divBody2 = document.createElement('div');
    divBody2.className = 'col-12 col-lg bg-info border border-primary'
    divBody2.innerText = 'Main body part'

    divRowBody.appendChild(divBody);
    divRowBody.appendChild(divBody2);
    
    const divRowFooter = document.createElement('div');
    divRowFooter.className = 'row';
    container.appendChild(divRowFooter);
    const divFooter = document.createElement('div');
    divFooter.className = 'col bg-info border border-primary'
    divFooter.innerText = 'Footer'
    divRowFooter.appendChild(divFooter);
    buttonAboutUs(pageAboutUS);

    return container;

    
}
