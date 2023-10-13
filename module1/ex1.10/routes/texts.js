const express = require('express');
const router = express.Router();
const {v4 : uuidv4} = require('uuid');
const {
    readAllTexts
} = require('../models/texts');
router.get('/', (req,res) => {
    const levelVerified = req.query?.level;
    const level = levelVerified===undefined|| levelVerified ==='easy' || levelVerified === 'medium'
    || levelVerified === 'hard' ? levelVerified : -1;
    if(level===-1)res.sendStatus(400);
    const list = readAllTexts(level);
    res.json(list)
});


router.post('/' , (req,res) => {
    const content = typeof req.body?.content ==='string' 
        ? req.body.content 
        : undefined;
    const level = req.body?.level ==='easy' || req.body.level === 'medium'
        || req.body.level === 'hard' ? req.body.level : undefined;

    if(!content || !level) res.sendStatus(400);
    
})



module.exports = router;