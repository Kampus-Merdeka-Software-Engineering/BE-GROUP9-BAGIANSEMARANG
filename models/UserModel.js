import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define(
  "Users",
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refres_token: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Users;
