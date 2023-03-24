const { connect } = require('mongoose')
const { mongoDb } = require('../config')


async function dbConnect() {
    await connect(mongoDb.URI);
}


module.exports = dbConnect