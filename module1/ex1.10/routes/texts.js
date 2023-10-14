const express = require('express');

const router = express.Router();

const {
    readAllTexts,
    addOneText,
    levelVerified,
    readGetTexts,
    putOneText,
    deleteOneText
} = require('../models/texts');

router.get('/', (req,res) => {
    const level = req?.query?.level;
    const texts  = readAllTexts(level);
    if(!texts)return res.sendStatus(400);
    return res.json(texts)
});

router.get('/:id', (req,res) => {
    const id = req?.params?.id;
    const text  = readGetTexts(id);
    if(!text)return res.sendStatus(404);
    return res.json(text)
});


router.post('/' , (req,res) => {
    const content = req.body?.content?.trim()?.length !==0 
        ? req.body.content 
        : undefined;
    const level = req?.body?.level;
    const levelIsOk = levelVerified(level);
    if(!content || !levelIsOk) return res.sendStatus(400);
    const newElement = addOneText(req.body);
    if(!newElement)return res.sendStatus(409);
    return res.json(newElement);
});

router.delete('/:id' , (req,res) => {
    const id = req?.params?.id
    const deletedElement = deleteOneText(id);
    if(!deletedElement)return res.sendStatus(400)
    return res.json(deletedElement);
});

router.put('/:id' , (req,res) => {
    const id = req?.params?.id
   const content = req?.body?.content;
   const level = req?.body?.level;
   const levelIsOk = levelVerified(level);
   if(!content || !levelIsOk)return res.sendStatus(400);
    return putOneText(id,req.body);

})




module.exports = router;