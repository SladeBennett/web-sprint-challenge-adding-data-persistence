const db = require('../../data/dbConfig')

async function getTasks() {
    const taskRows = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select(
        't.task_id',
        't.task_description',
        't.task_notes',
        't.task_completed',
        'p.project_name',
        'p.project_description'
    )
    return taskRows
}

module.exports = {
    getTasks,
}