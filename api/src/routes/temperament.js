const { Router } = require("express");
const axios = require("axios").default;
const { firstEigth, search, temeperamentos } = require("./Controller/dog");
const router = Router();
const { creador, buscar, creador2, buscarTemp} = require ('../db')

const num = 1;
router.get('/', (req, res) => {
    // https://api.thedogapi.com/v1/breeds
    buscarTemp()
    .then(x=>{ 
        if(x){res.json(x)}
    else{
        axios.get(`https://api.thedogapi.com/v1/breeds`)
        .then((response) => {
            temeperamentos(response.data).map(x=>creador2(x))
        res.json(temeperamentos(response.data)); })}
})
        
        .catch((err) => res.status(500).json({ error: "asdas" }));
    })
module.exports = router;
