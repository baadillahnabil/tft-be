module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('customers', {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gender: {
        type: Sequelize.STRING(1), // M: Male, F: Female
        allowNull: false
      },
      is_married: Sequelize.STRING(1), // N: Not Married, M: Married
      address: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('customers')
  }
}
