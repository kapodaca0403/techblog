const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

class comment extends Model {}

comment.init(

    { 
        id: { 
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true, 
        }, 
        comment_info: { 
            type: DataTypes.STRING, 
            allowNull: true, 
        }, 
        comment_id: { 
            type: DataTypes.INTEGER, 
            allowNull: false, 
        }
    }
    { 
        sequelize, 
        freezeTableName: true, 
        underscored: true, 
        modelName: 'comment', 
    }
    ); 
    module.exports = comment; 