'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('set_times', {
      set_times_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     
      band_id: {
        type: Sequelize.INTEGER,
      },

      stage_id: {
        type: Sequelize.INTEGER,
       },
      start_times: {
        type: Sequelize.INTEGER
      },
    
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('set_times');
  }
};