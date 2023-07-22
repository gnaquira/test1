import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("BD_G05", "postgres", "postgres", {
    host: "localhost",
    dialect: "postgres"
})

