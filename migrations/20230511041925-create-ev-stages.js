'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ev_stages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ev_stages_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'stage',
            schema:'schema'},
           },  key:'stage_id'},
      
      ev_stages_event_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'event',
            schema:'schema'},
           },  key:'event_id'},
      
      ev_stages_stage_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'stage',
            schema:'schema'},
           },  key:'stage_id'},
        
      
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
    await queryInterface.dropTable('ev_stages');
  }
};