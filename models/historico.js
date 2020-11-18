'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Historico.belongsTo(models.User);
    }
  };
  Historico.init({
    altura: DataTypes.DOUBLE,
    massa: DataTypes.DOUBLE,
    idade: DataTypes.INTEGER,
    imc: DataTypes.DOUBLE,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Historico',
  });
  return Historico;
};