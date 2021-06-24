const {Router} = require ('express');
const { Sequelize } = require('sequelize');
const axios= require ('axios').default;
const {firstEigth,search} = require ('./Controller/dog');
const router= Router();
const { creador, buscar } = require('../db.js');



router.post('/a', (req, res) => {
    // creador(req.body.title)
    res.send(req.body)
})
router.get('/a', (req, res) => {
    buscar()
    .then (x=>res.json(x)) 

})



module.exports=router;