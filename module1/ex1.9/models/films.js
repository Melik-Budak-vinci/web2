
const { parse, serialize } = require('../utils/json');

const jsonDbPath = `${__dirname }/../data/pizzas.json`;

function readAllFilms(orderBy){
    const LIST = parse(jsonDbPath);
    if(!orderBy)return LIST;
    return [...LIST].filter((films)=> films.duration >= orderBy);
    
};

function readOneFilm(id){
    const LIST = parse(jsonDbPath);
    const index = LIST.findIndex((film) => film.id===id);
    if(index < 0 )return undefined;
    return LIST[index]
};
function addOneFilm(addElement){
   const LIST =  parse(jsonDbPath);
   const indexFound = LIST.length !== 0 ? LIST.length-1 : undefined
   const trueId = indexFound !==undefined ? LIST[indexFound]?.id : 0
   const nextid = trueId+1;
   const newElement = {nextid, ...addElement};
   LIST.push(newElement);
   serialize(jsonDbPath,LIST);
   return newElement;


}

function deleteOneFilm(id){
    const LIST = parse(jsonDbPath);
    const index = LIST.findIndex((film) => film.id === id );
    if(index < 0) return undefined;
    const deleteElement = LIST.splice(index,1)[0];
    serialize(jsonDbPath,LIST);
    return deleteElement;
};

function patchOneFilm(id,patch){
    const LIST = parse(jsonDbPath);
    const index = LIST.findIndex((film) => film.id===id);
    if(index<0)return undefined;
    const patchElement = {...LIST[index], ...patch };
    LIST[index] = patchElement;
    serialize(jsonDbPath,LIST);
    return patchElement;

};

function putOneFilm(id,put){
    const LIST = parse(jsonDbPath);
    const index = LIST.findIndex((film)=>film.id===id)
    const newElement = {id,...put}
    if(index<0){
        LIST.push(newElement);
    }else{
        LIST[index] = newElement;
    }
    serialize(jsonDbPath,LIST)
    return newElement
    
}


module.exports = {
    readAllFilms,
    readOneFilm,
    addOneFilm,
    deleteOneFilm,
    patchOneFilm,
    putOneFilm
}