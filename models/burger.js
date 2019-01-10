module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE

  });
  // Posts are unable to be made without an author
  burger.associate = function(models) {
    burger.hasOne(models.user, {
     
    });
  };
  return burger;
};

