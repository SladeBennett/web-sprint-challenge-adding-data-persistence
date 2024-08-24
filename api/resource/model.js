const db = require('../../data/dbConfig')

async function getResources() {
    const resourceRows = await db('resources')
    return resourceRows
}

async function addNewRes(resource) {
    return db('resources').insert(resource)
    .then(([resource_id]) => {
        return db('resources').where('resource_id', resource_id).first()
    })
}

module.exports = {
    getResources,
    addNewRes,
}