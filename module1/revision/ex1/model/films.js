

function handleAddFilms(){
    if(films.find((film)=>film.title===title))res.sendStatus(409);
    const film = {id:films.length+1,title,duration,budget,link};
    films.push(film);
}
module.exports = {
    handleAddFilms,
}