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
        id : 1,
        title : "voyage en belgique",
        duration :60,
        budget : 5,
        link : "rottentomatoes",

    },
    {
        id : 1,
        title : "voyage en afrique",
        duration :60,
        budget : 5,
        link : "rottentomatoes",

    },
];
router.get('/', function(req, res, next) {
    res.json(LIST);
  });

module.exports = router;
