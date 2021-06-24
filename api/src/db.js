require('dotenv').config();
const { Sequelize, Op } = require('sequelize');
const fs = require('fs');
const path = require('path');

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/esunadb`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });
console.log(modelDefiners)
// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
console.log(modelDefiners)

const { Dog, Breed, Temperament, Breedandtemp } = sequelize.models;



function creador(breed) {
  (async () => {
    await sequelize.sync({ force: false });
    const response = await Breed.create({
      name: breed.name,
      weight: breed.weight.imperial,
      height: breed.height.imperial,
      age: breed.life_span,
      image: breed.image.url
    });
    await addTemperamentforBreeds(breed.temperament, response.dataValues.id)
  })();
}

function creador2(x) {
  (async () => {
    await sequelize.sync({ force: false });
    await Temperament.create({
      name: x
    });
  })();
}

const addTemperamentforBreeds = async (temperaments, breedId) => {
  const temperamentSplited = temperaments.split(', ');
  const temperamentsFromDb = await Temperament.findAll({
    where: {
      name: {
        [Op.in]: temperamentSplited
      }
    }
  })

  temperamentsFromDb.map(async (temperamento) => {
    // console.log(temperamento.dataValues)
    await Breedandtemp.create({
      temperamentId: temperamento.dataValues.id,
      breedId
    })
  })
}

async function buscar() {
  return await Breed.findAll()
}
async function buscarTemp() {
  return await Temperament.findAll()
}

// Aca vendrian las relacionesz
// Product.hasMany(Reviews);
// console.log(sequelize.models)

Breed.belongsToMany(Temperament, { through: Breedandtemp });
Temperament.belongsToMany(Breed, { through: Breedandtemp });
console.log(sequelize.models)

async function ordenTemp(temperament) {
  const s = await Temperament.findOne({
    where: {
      name: temperament
    }
  })
    .then(x => Breedandtemp.findAll({ where: { temperamentId: x.dataValues.id } }))
    .then(x => x.map((x) => Breed.findOne({ where: { id: x.dataValues.breedId } })
    ))
    .then(x => Promise.all(x))

  return s

}

ordenTemp('Independent')
//  .then(x=> console.log(x))

async function temperamet(idraza) {
  const s = await Breedandtemp.findAll({
    where: {
      breedId: idraza
    }
  })
    .then(x => x.map((x) => Temperament.findOne({ where: { id: x.dataValues.temperamentId } })
    ))
    .then(x => Promise.all(x))

  return s
}

  // .then(x => console.log(x))


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  creador, creador2, buscar,temperamet,buscarTemp
};
