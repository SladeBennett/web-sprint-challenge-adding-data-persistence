const projects = [
    { 
        project_name: 'World domination',
        project_description: 'The end, is only the beginning.', 
    },
    { 
        project_name: 'Walk dog', 
        project_description: 'A lovely afternoon',  
    },
    { 
        project_name: 'Go to sleep',
        project_description: 'The motion of turning in', 
    },
]

const resources = [
    { 
        resource_name: 'Indian Scout Bobber', 
        resource_description: 'a rather good looking motorcycle'
    },
    { 
        resource_name: 'Pepsi draft vanilla', 
        resource_description: 'a refreshing drink'
    },
    { 
        resource_name: 'Gas', 
        resource_description: 'a fuel necessary for a motorcycle'
    },
    { 
        resource_name: 'Leather leash', 
        resource_description: 'a supple, quality leash'
    },
    { 
        resource_name: 'water', 
        resource_description: 'necessary for long walks'
    },
    { 
        resource_name: 'weighted blanket', 
        resource_description: 'a lovely addition to life'
    },
]

const tasks = [
    //world domination
    { project_id: 1, task_description: 'Obtain Indian Scout Bobber'},
    { project_id: 1, task_description: 'Obtain refreshing drink'},
    { project_id: 1, task_description: 'Ride'},
    //walk dog
    { project_id: 2, task_description: 'Aquire leash'},
    { project_id: 2, task_description: 'Take husky on a walk'},
    { project_id: 2, task_description: 'Return'},
    //go to sleep
    { project_id: 3, task_description: 'Aquire blanket'},
    { project_id: 3, task_description: 'Go to bed'},
]

const project_resources = [
    { project_id: 1, resource_id: 1 },
    { project_id: 1, resource_id: 2 },
    { project_id: 1, resource_id: 3 },
    { project_id: 2, resource_id: 4 },
    { project_id: 2, resource_id: 5 },
    { project_id: 3, resource_id: 6 },
]

exports.seed = async function(knex) {
    await knex('projects').insert(projects)    
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
}