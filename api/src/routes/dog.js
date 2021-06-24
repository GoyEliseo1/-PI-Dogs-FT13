const { Router } = require("express");
const axios = require("axios").default;
const { firstEigth, search, arrayt } = require("./Controller/dog");
const router = Router();
const { creador, buscar } = require ('../db')

const num = 1;
router.post ('/', (req, res)=>{
    creador(req.body)
    res.json('oka')
})
router.get(/\//, (req, res) => {
    axios.get(`http://localhost:3001/a/a`)
        .then((response) => {
        // response.data.map(x =>creador(x))
        console.log('ola')
            if (req.query.name) {
                filtersearch = search(response.data, req.query.name);
                if (filtersearch.length > 0) {
                    res.json(firstEigth(filtersearch, b = num));
                } else res.status(500).json({error: "WEYYY NO HAY ALGO CON ESE NOMBRE"});
            } else {
                if (req.query.page) {
                    if (firstEigth(response.data,req.query.page).length){
                        res.json(firstEigth(response.data,req.query.page));
                    }
                    else{res.status(500).json({error: "WEYYY ESE NUM ES MUY GRANDE"})}
                } else {
                    var obj = firstEigth([response.data[req.url.slice(1) - 1]]);
                    obj[0].temperament = response.data[req.url.slice(1) - 1].temperament;
                    res.json(obj);
                }
            }
        })
        // .catch((err) => res.status(500).json({ error: "emqweqwek" }));
});
module.exports = router;
