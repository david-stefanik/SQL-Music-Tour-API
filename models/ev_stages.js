'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ev_stages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ev_stages.init({
    ev_stages_id: DataTypes.INTEGER,
    ev_stages_event_id: DataTypes.INTEGER,
    ev_stages_stage_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ev_stages',
  });
  return ev_stages;
};