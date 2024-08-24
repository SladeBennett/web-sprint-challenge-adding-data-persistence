const db = require('../../data/dbConfig')

async function getProjects() {
    const projectRows = await db('projects as p')
    return projectRows
}

async function addNewProj(project) {
    return db('projects').insert(project)
    .then(([project_id]) => {
        return db('projects')
        .where('project_id', project_id)
        .first()
    })
}

module.exports = {
    getProjects,
    addNewProj,
}
