// Este es el archivo que importamos en el index.html

// Aquí puedo requerir otros archivos de JS para hacer modular mi aplicación:
// el servicio de tareas podría obtener, actualizar y crear tareas. y toda la lógica queda encapsulada en otro archivo.

const tasksService = require('./utils/tasksService');

// funcion principal, (async es por que vamos a ejectuar métodos asíncronos dentro (async/await))
/*async function home() {
    // aquí toda la lógica del index/home
    //...lalala

    //en algún momento quiero llamar a la API para tener datos de las tareas:
    // en este caso quiero el task con el ID 1
    //const task = await tasksService.getTask(1);
    console.log('task 1', task);


    
    // search for leads
    const leads = await tasksService.searchAllLeads();
    console.log('all leads', leads);
}

home();*/

const tasksFunction = (async () => {
    // ahora quiero buscar todas las tareas de los projectos:
    const container = document.getElementById('taskList')
    const tasks = await tasksService.searchAllTasks();
    console.log('all project task', tasks);

    const templateAllTasks = tasks.reduce((prev, item) => {
        const templateTask = `<div>
            ${item.name} - ${item.priority}
        </div>`
        return prev + templateTask
    },'')

    container.innerHTML = templateAllTasks;
})();
tasksFunction

