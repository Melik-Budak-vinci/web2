const {v4 : uuidv4} = require('uuid');

const { parse, serialize} = require('../utils/json');



const jsonDbPath = `${__dirname }/../data/texts.json`;




function readAllTexts(orderBy){
    const list = parse(jsonDbPath);
    console.log(list);
    console.log(orderBy)
    if(!orderBy) return list;
    const level = levelVerified(orderBy);
    if(level){
        return [...list].filter((t) => t.level === level);
    }
    return undefined;
    

}
function readOneTexts(id){
    const list = parse(jsonDbPath);
    return list.find((t)=> t.id ===id);
    

}
function addOneText (newElement){
    const list = parse(jsonDbPath);
    const foundtext = list.find((t)=>t.content===newElement.content);
    if(foundtext)return undefined;
    const element = {id : uuidv4(), ...newElement};
    list.push(element);
    serialize(jsonDbPath,list);
    return element;
    
}
function putOneText (id,element){
    const list = parse(jsonDbPath);
    const index = list.findIndex((t) => t.id===id);
    if(index<0){
        list.push({id,...element})
    }else{
        list[index] = {...list[index],...element};
    }
    serialize(jsonDbPath,list);
    return list[index];
}
function deleteOneText (id){
    const list = parse(jsonDbPath);
    console.log(id)
    const index = list.findIndex((t=>t.id===id))
    if(index<0)return undefined
    const element = list.splice(index,1)[0];
    serialize(jsonDbPath,list)
    return element ;
}
function levelVerified (level){
    const levelIsOk = level==='easy' || level === 'medium'
    || level === 'hard' ? level : undefined;
    return levelIsOk;
}


module.exports = {
    readAllTexts,
    addOneText,
    levelVerified,
    readGetTexts: readOneTexts,
    putOneText,
    deleteOneText
}