const e = require('express');
var express=require('express');
var router= express.Router();

var LIST =[
    {
        id : 1,
        title : "voyage du monde",
        duration :60,
        budget : 5,
        link : "rottentomatoes",

    },
    {
        id : 2,
        title : "voyage en belgique",
        duration :70,
        budget : 5,
        link : "rottentomatoes",

    },
    {
        id : 3,
        title : "voyage en afrique",
        duration :700,
        budget : 5,
        link : "rottentomatoes",

    },
];
router.get('/', function(req, res, next) {
    const min_duration=req?.query?.['minimum-duration']>0 
    ? Number (req.query['minimum-duration']) 
    : undefined;
    if(!min_duration){
    res.json(LIST)
    }else{
        const listtriee= [...LIST].filter((e)=>e.duration>=min_duration);
        res.json(listtriee);
    }
   
  });

router.get('/:id', function(req,res,next){
    console.log(`GET /films/${req.params.id}`)
    const index=LIST.findIndex((film) => film.id==req.params.id)
    if (index < 0) return res.sendStatus(404);
    res.json(LIST[index]);
    
  });
router.post('/',function(req,res,next){
    const newFilm=req.body;
    const title = typeof(newFilm?.title) === 'string' ? newFilm.title : undefined;
    const duration = typeof(newFilm?.duration)==='number' || newFilm.duration>0  ? newFilm.duration : undefined;
    const budget = typeof(newFilm?.budget)==='number' || newFilm.budget>0 ? newFilm.budget : undefined;
    const link = typeof(newFilm?.link)==='string' ? newFilm.link : undefined;
    if(!title || !duration || !budget || !link)res.json('bad request')
    const tLength = LIST.length !==0 ? LIST.length-1 : undefined;
    const nextid = tLength !== undefined ? LIST[tLength]?.id : 0;
    const lastid = nextid+1
    nf={id: lastid , title,duration,budget,link}
    LIST.push(nf);
    
})

module.exports = router;
