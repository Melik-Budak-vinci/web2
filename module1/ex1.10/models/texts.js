const { text } = require('express');
const { parse, serialize} = require('../utils/json');
const jsonDbPath = `${__dirname }/../data/texts.json`;


function readAllTexts(orderBy){
    const list = parse(jsonDbPath);
    if(orderBy){
        return [...list].filter((t) => t.level === orderBy);
    }
    return list;
    

}
function addOneText (newElement){
    
}


module.exports = {
    readAllTexts

}