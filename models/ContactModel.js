import { DataTypes, Sequelize } from "sequelize";

import db from "../config/Database.js";

const Contact = db.define("contact", {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  pesan: {
    type: DataTypes.STRING,
  },
});
export default Contact;

(async () => {
  await db.sync();
})();
