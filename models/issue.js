'use strict'
module.exports = (sequelize, DataTypes) => {
  const Issue = sequelize.define(
    'Issue',
    {
      title: DataTypes.STRING,
      text: DataTypes.TEXT,
      created_by: DataTypes.TEXT,
      assigned_to: DataTypes.TEXT,
      status: DataTypes.TEXT,
      open: DataTypes.BOOLEAN,
    },
    {}
  )
  Issue.associate = function(models) {
    // associations can be defined here
    Issue.belongsTo(models.Project)
  }
  return Issue
}
