const {Router} = require ('express');
const { Sequelize } = require('sequelize');
const axios= require ('axios').default;
const {firstEigth,search} = require ('./Controller/dog');
const router= Router();
const { creador, buscar, temperamet } = require('../db.js');



router.get('/bb', (req, res) => {
    temperamet(req.query.id)
    .then (x=>res.json(x)) 
})

module.exports=router;