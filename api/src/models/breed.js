const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
sequelize.define('breed', {
    name:{
    type: DataTypes.STRING,
    allowNull: false,
    },

    weight:{
        type: DataTypes.STRING,
    },
    height:{
        type: DataTypes.STRING,
    },
    age:{
    type: DataTypes.STRING
    },
    image:{
        type: DataTypes.STRING
    }
});
};
