const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogroute= require ('./dog')
const teemperament= require ('./temperament')
const testR = require ('./datadb')
const breedtemp = require ('./breedtemp')
const { Sequelize } = require('sequelize');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/temperament',teemperament)
router.use('/dog',dogroute)
router.use('/a',testR)
router.use('/b',breedtemp)

module.exports = router;
