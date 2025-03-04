'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bands', {
      band_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
   
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genre: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      available_start_time: {
        allowNull: true,
        type: Sequelize.DATE
      },
      end_time: {
        allowNull: true,
        type: Sequelize.DATE
      },
    
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bands');
  }
};