
module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('Prizes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('Prizes')
  }
}
