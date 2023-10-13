/* eslint-disable no-console */
const express = require('express');
const { readAllFilms,
        readOneFilm,
        deleteOneFilm,
        patchOneFilm,
        putOneFilm, 
        addOneFilm} = require('../models/films');
        
const router = express.Router();


router.get('/', (req, res) => {
  
  console.log(req.query);
  const minDuration = req?.query?.['minimum-duration']
    ? Number(req.query['minimum-duration'])
    : undefined;
  if (minDuration && typeof minDuration !== 'number') return res.sendStatus(400);
  const list = readAllFilms(minDuration);
  return res.json(list);
});

router.get('/:id', (req, res) => {
  console.log(`GET /films/${req.params.id}`);

  const id = Number (req?.params?.id)
  if(!id)return res.sendStatus(400);

  const film = readOneFilm(id);

  if (!film) return res.sendStatus(404);

   return res.json(film);
});


router.delete('/:id', (req, res) => {
  const id = Number (req?.params?.id);
  if(!id)return res.sendStatus(400);
  const elementDelete = deleteOneFilm(id)
  if (!elementDelete) return res.sendStatus(404);
  return res.json(elementDelete);
});
router.patch('/:id', (req, res) => {

  const id = Number (req?.params?.id);
  const duration = req?.body?.duration > 0 ? req.body.duration : undefined;
  const budget = req.body?.budget > 0 ? req.body.budget : undefined;
  if (!duration || !budget) return res.sendStatus(400);

  const patchElement = patchOneFilm(id,req.body);
  if (!patchElement) return res.sendStatus(404);
  return res.json(patchElement);
});
router.put('/:id', (req, res) => {
  // verifications des parametre
  const id = Number (req?.params?.id);
  const title = req?.body?.title;
  const duration = req?.body?.duration > 0 ? req.body.duration : undefined;
  const budget = req.body?.budget > 0 ? req.body.budget : undefined;
  const link = req.body?.link;
  if (!duration || !budget || !id || !title || !link) return res.sendStatus(400);

  const newelement = putOneFilm(id,req.body)
  return res.json(newelement);
});

router.post('/', (req, res,) => {
 
  const newFilm = req?.body;
  const title = typeof newFilm?.title === 'string' ? newFilm.title : undefined;
  if (readAllFilms().find((e) => e.title === title)) return res.sendStatus(409);
  const duration = typeof newFilm?.duration === 'number' || newFilm.duration > 0 ? newFilm.duration : undefined;
  const budget =typeof newFilm?.budget === 'number' || newFilm.budget > 0 ? newFilm.budget : undefined;
  const link = typeof newFilm?.link === 'string' ? newFilm.link : undefined;
  if (!title || !duration || !budget || !link) return res.sendStatus(400);
  addOneFilm(newFilm)
  return(newFilm);
});

module.exports = router;
