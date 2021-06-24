const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('breedandtemp', {
        breedId: {
            type: DataTypes.INTEGER,
        },
        temperamentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
    });
};
