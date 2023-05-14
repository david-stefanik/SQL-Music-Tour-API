'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  events.init({
    events_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    name:{type:DataTypes.STRING,
    allowNull: false},
    date_start:{type:DataTypes.DATE,
    allowNull:true},
    date_end:{type: DataTypes.DATE,
    allowNull:true}
  }, {
    sequelize,
    modelName: 'events',
    tableName:'events',
    timestamps: false
  });
  return events;
};