const HomePage = () => {
  const main = document.querySelector('main');
  fetch('http://localhost:3000/questions')
  .then((response) => {
    if(!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    return response.json();
  })
  .then((questions) => {
    const divCategory = document.createElement('div');
    const questionsFiltered =  questions.filter(question =>  question.category === 'Mathematics')
    questionsFiltered.forEach((question) => {
      const title = document.createElement('h1');
      title.innerText = question.question
      divCategory.appendChild(title);
      question.answers.forEach( (answer) =>{
        const divanswer = document.createElement('div');
        divanswer.innerText = answer.text;
        divCategory.appendChild(divanswer)
      })
      
    });;
    
    main.appendChild(divCategory);

  })
 
};

export default HomePage;
