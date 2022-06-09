require('dotenv').config();
const {CONNECTION_STRING} = process.env;
const Sequelize = require('sequelize');

const sequelize = new Sequelize (CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    sendUserInfo:
        async (req, res) => {
            let info = await sequelize.query(
                `SELECT * FROM input`
            )
            .then(res => res.status(200).send(dbRes[0]))
            .catch(err => console.log('error', err))
        },
    addNewUserInfo: 
        async (req, res) => {
            let {text} = req.body;

            await sequelize.query(
                `INSERT INTO input(text)
                    VALUES('${text}')
                    `)
                    .then(res => res.status(200).send(dbRes[0], 'Added input succesfully'))
                    .catch(err => console.log('404 error', err))
            }
        }