'use strict';
module.exports = (sequelize, DataTypes) => {
  const article = sequelize.define('article', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});
  article.associate = function(models) {
    // associations can be defined here
  };
  return article;
};