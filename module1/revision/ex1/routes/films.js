var express = require('express');
var router = express.Router();


let films = [
    {
      id: 1,
      title: "Inception",
      duration: 148,
      budget: 160,
      link: "https://www.imdb.com/title/tt1375666/"
    },
    {
      id: 2,
      title: "The Dark Knight",
      duration: 152,
      budget: 185,
      link: "https://www.imdb.com/title/tt0468569/"
    },
    {
      id: 3,
      title: "Pulp Fiction",
      duration: 154,
      budget: 8.5,
      link: "https://www.imdb.com/title/tt0110912/"
    }
  ];

router.get('/', (req,res,next)=>{
    const minDuration =  req.query?.['minimum-duration'];
    if(!minDuration)return res.json(films);
    const filmsFiltered = films.filter((film)=> film.duration>=minDuration)
    if(!filmsFiltered || filmsFiltered.length===0)return res.sendStatus(404);
     return res.json(filmsFiltered)
});
router.get('/:id',(req,res)=>{
    const id = req?.params?.id; 
    if(!id)return res.sendStatus(400)
    console.log(id);
    let onefilm = films.find((film)=>film.id == id);
    if(!onefilm)return res.sendStatus(404)
    console.log(onefilm);
    return res.json(onefilm)
})
router.post('/',(req,res)=>{
   
    const title = typeof req.body?.title ==='string' ? req.body.title : undefined;
    const duration = req.body?.duration>0 || !isNaN(req.body.duration) ? req.body.duration : undefined;
    const budget = req.body?.budget>0 || !isNaN(req.body.budget) ? req.body.budget : undefined;
    const link = req.body?.link;
    console.log(typeof title ==='string');
    if( !title|| !budget|| !duration) res.sendStatus(400);
    
    
    console.log(films);
    
})
router.delete('/:id',(req,res)=>{
    const id = req.params?.id
    if(!id || isNaN(id))return res.sendStatus(400);
    films = films.map((films)=>{if(films.id !=id) return films});
    return;
})
router.patch('/:id',(req,res)=>{
    const title = typeof req.body?.title ==='string' ? req.body.title : undefined;
    const duration = req.body?.duration>0 || !isNaN(req.body.duration) ? req.body.duration : undefined;
    const budget = req.body?.budget>0 || !isNaN(req.body.budget) ? req.body.budget : undefined;
    const link = req.body?.link;
    if( !title|| !budget|| !duration) res.sendStatus(400);
    
    let film = films.find((filmm)=>filmm.id==req.params.id);
    
    film = {...film,title,duration,budget,link};
  
    const index =  films.findIndex((filmm)=>filmm.id==req.params.id);
   
    films[index] = film;
    return res.json(films);
})




module.exports = router;
