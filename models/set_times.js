'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class set_times extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  set_times.init({
    set_times_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER,
    stage_id: DataTypes.INTEGER,
    start_times: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'set_times',
  });
  return set_times;
};