const HomePage = () => {
  const main = document.querySelector('main');
  fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=single')
  .then((response) => {
    if(!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    return response.json();
  })
  .then((joke) => {
    main.innerText = `${joke.category }\n${ joke.joke}`;
  })
 
};

export default HomePage;
