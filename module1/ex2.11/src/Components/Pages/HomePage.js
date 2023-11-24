import harry from '../../img/harry potter.jpg';
import SAO from '../../img/Sword Art Online.jpg';

const main = document.querySelector('main');

function HomePage(){
    main.innerHTML = ''
    addTableAsNode();
    renderPhoto(harry);
    renderPhoto(SAO)
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


    return container;

    
}

export default HomePage;
