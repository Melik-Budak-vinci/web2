const main = document.querySelector('main');

function addMoviePage(){
    const div = document.createElement('div');
    main.appendChild(div);
    const title = document.createElement('h1');
    const form = document.createElement('form');
    form.action = '/addFilmPage'
    div.appendChild(title);
    div.appendChild(form);
    title.innerText = 'ajouter un film';

    const divTitle = document.createElement('div');
    form.appendChild(divTitle);
    const labelTitle = document.createElement('label');
    const inpTitle = document.createElement('input');
    inpTitle.type = 'text';
    labelTitle.innerText = 'titre du film :'
    divTitle.appendChild(labelTitle);
    divTitle.appendChild(inpTitle);

    const divDuration = document.createElement('div');
    form.appendChild(divDuration);
    const labelDuration = document.createElement('label');
    const inpDuration = document.createElement('input');
    inpDuration.type='text';
    labelDuration.innerText = 'durée du film : ';
    divDuration.appendChild(labelDuration);
    divDuration.appendChild(inpDuration);

    const divBudget = document.createElement('div');
    form.appendChild(divBudget);
    const labelBudget = document.createElement('label');
    const inpBudget = document.createElement('input');
    labelBudget.innerText = 'budget : ';
    inpBudget.type='text';
    divBudget.appendChild(labelBudget);
    divBudget.appendChild(inpBudget);

    const divLink = document.createElement('div');
    form.appendChild(divLink)
    const labelLink = document.createElement('label');
    const inpLink = document.createElement('input');
    labelLink.innerText = 'link : ';
    inpLink.type='text';
    divLink.appendChild(labelLink);
    divLink.appendChild(inpLink);

    const submit = document.createElement('button');
    submit.type = 'submit'
    submit.innerText =  'ajouter'
    form.appendChild(submit);
}
export default addMoviePage;