const e = require('express');
var express = require('express');
var router = express.Router();

var LIST = [
    {
        id: 1,
        title: "voyage du monde",
        duration: 60,
        budget: 5,
        link: "rottentomatoes",

    },
    {
        id: 2,
        title: "voyage en belgique",
        duration: 70,
        budget: 5,
        link: "rottentomatoes",

    },
    {
        id: 3,
        title: "voyage en afrique",
        duration: 700,
        budget: 5,
        link: "rottentomatoes",

    },
];
router.get('/', function (req, res, next) {
    console.log(req.query)
    if (req?.query?.['minimum-duration'] === undefined) res.json(LIST)
    const min_duration = req?.query?.['minimum-duration']
        ? Number(req.query['minimum-duration'])
        : undefined;
    if (!min_duration || typeof min_duration !== 'number') return res.sendStatus(400);

    const listtriee = [...LIST].filter((e) => e.duration >= min_duration);
    res.json(listtriee);


});

router.get('/:id', function (req, res, next) {
    console.log(`GET /films/${req.params.id}`)
    const index = LIST.findIndex((film) => film.id == req.params.id)
    if (index < 0) return res.sendStatus(404);
    res.json(LIST[index]);
});
router.delete('/:id', function (req, res, next) {
    const id = req?.params?.id;
    const findIndex = LIST.findIndex(film => film.id == id);
    if (findIndex < 0) return res.sendStatus(404);
    const elementsupv1 = LIST.splice(findIndex, 1);
    const elementSup = elementsupv1[0];
    res.json(elementSup);
});
router.patch('/:id', function (req, res, next) {
    const id = req?.params?.id;
    const duration = req?.body?.duration > 0 ? req.body.duration : undefined;
    const budget = req.body?.budget > 0 ? req.body.budget : undefined;
    if (!duration || !budget) return res.sendStatus(400);
    const findIndex = LIST.findIndex(film => film.id == id);
    console.log('index' + findIndex)
    console.log('condition index ' + findIndex < 0)
    if (findIndex < 0) return res.sendStatus(404);
    const newElementAfterModif = { ...LIST[findIndex], ...req.body };
    LIST[findIndex] = newElementAfterModif;
    res.json(newElementAfterModif)
});
router.put('/:id', function (req, res, next) {
    //verifications des parametre
    const id = req?.params?.id;
    const title = req?.body?.title
    const duration = req?.body?.duration > 0 ? req.body.duration : undefined;
    const budget = req.body?.budget > 0 ? req.body.budget : undefined;
    const link = req.body?.link
    if (!duration || !budget || !id || !title || !link) return res.sendStatus(400);

    //verifier si il est deja present dans le tableau sinon 
    const findIndex = LIST.findIndex(film => film.id == id);
    const newelement = { id, ...req.body }
    if (findIndex < 0) {
        LIST.push(newelement)
    } else {

        LIST[findIndex] = newelement;
    }

});

router.post('/', function (req, res, next) {
    const newFilm = req.body;
    const title = typeof (newFilm?.title) === 'string' ? newFilm.title : undefined;
    if (LIST.find(e => e.title === title)) {
        return res.sendStatus(409);
    } else {
        const duration = typeof (newFilm?.duration) === 'number' || newFilm.duration > 0 ? newFilm.duration : undefined;
        const budget = typeof (newFilm?.budget) === 'number' || newFilm.budget > 0 ? newFilm.budget : undefined;
        const link = typeof (newFilm?.link) === 'string' ? newFilm.link : undefined;
        if (!title || !duration || !budget || !link) return res.sendStatus(400)
        const tLength = LIST.length !== 0 ? LIST.length - 1 : undefined;
        const nextid = tLength !== undefined ? LIST[tLength]?.id : 0;
        const lastid = nextid + 1
        nf = { id: lastid, title, duration, budget, link }

        LIST.push(nf);
    }


})

module.exports = router;
