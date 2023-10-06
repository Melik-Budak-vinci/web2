const { link } = require('../routes/films');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = `${__dirname }/../data/pizzas.json`;

function readAllFilms(orderBy){
    const LIST = parse(jsonDbPath);
    if(!orderBy)return LIST;
    return [...LIST].filter((films)=> films.duration >= orderBy)
    
}

module.exports = {
    readAllFilms
}