const db = require('../../data/dbConfig')

async function getResources() {
    const resourceRows = await db('resources')
    return resourceRows
}

module.exports = {
    getResources,
}