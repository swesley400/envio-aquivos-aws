import { Sequelize } from 'sequelize';
require('dotenv').config()

const databaseConnection = new Sequelize(`${process.env.DATABASENAME}`, `${process.env.DATABASEUSERNAME}`,  `${process.env.PASSWORDDATABASE}`, {
    host: `${process.env.DATABASEHOST}`,
    dialect:  'mysql',
    port: Number(process.env.DATABASEPORT)
});

databaseConnection.authenticate()
    .then(()=>{
        console.log("Autentiquei")
    })
    .catch((err)=> {
        console.log(err.message)
    })

export default databaseConnection