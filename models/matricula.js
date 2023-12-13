'use strict';
const {
  Model
} = require('sequelize');

const { Curso, Aluno } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
  }
  Matricula.init({
    sequelize,
    underscored: true,
  });
  return Matricula;
};