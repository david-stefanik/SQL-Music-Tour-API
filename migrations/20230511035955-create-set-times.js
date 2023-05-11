'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('set_times', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      set_times_id: {
        type: Sequelize.INTEGER
      },
      band_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
          tableName:'band',
          schema:'schema'},
      },key:'band_id'},

      stage_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'stage',
            schema:'schema'},
           },key:'stage_id'},
      start_times: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('set_times');
  }
};