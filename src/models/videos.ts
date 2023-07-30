import { Model, DataTypes } from "sequelize";
import databaseConnection from '../config/database'

export class Videos extends Model {
}

Videos.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  videoTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  videoName:{
    type: DataTypes.STRING
  },
  videoUrl: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  videoDescription: {
    type: DataTypes.STRING,
  },
  statusDaAprovacao: {
    type: DataTypes.BOOLEAN
  }
}, {sequelize: databaseConnection})