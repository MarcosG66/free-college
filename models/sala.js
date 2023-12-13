'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sala extends Model {
<<<<<<< HEAD
=======
    static associate(models) {
      Sala.hasOne(models.Curso, {
        foreignKey: 'sala_id',
        as: 'sala'
      });
    }
>>>>>>> 072940068cb708eebc7fd5de82196d035fad0c1d
  }
  
  Sala.init({
    numero: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      capacidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
  }, {
    sequelize,
    underscored: true,
  });

  return Sala;
}