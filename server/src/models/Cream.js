module.exports = (sequelize, DataTypes) => {
  const Cream = sequelize.define('Cream', {
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    usage: DataTypes.STRING,
    warning: DataTypes.STRING,
    manufactureDate: DataTypes.TIME,
    expiryDate: DataTypes.TIME,
    components: DataTypes.STRING
  },)
  Cream.associate = function (models) { }
  return Cream
}