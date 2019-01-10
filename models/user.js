module.exports = function(sequelize, DataTypes) { 
  var user = sequelize.define("user", {
  // id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   primaryKey: true
  // },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE

});

user.associate = function(models) {
  
  user.belongsTo(models.burger, {
    foreignKey: {
      allowNull: false
    }
  });
};

return user;
};