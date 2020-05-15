const token = process.env.API_TOKEN;

// aquí vamos a extraer la base de la API
// en algún punto esta constante se va a usar en varios módulos
// así que podrían moverla a un archivo de constantes.
const API_BASE_URL='https://cubosv2.4040.wtf/api';
const headers = {
  authtoken: token
};

// Obtener la tarea con un ID específico
async function getTask(id) {
    const request = await fetch(`${API_BASE_URL}/tasks/${id}`, {
        headers,
        method: 'GET'
    });
    const data = await request.json();
    return data;
}

// Buscar todas las tareas de los proyectos (simple ejemplo)
async function searchAllTasks() {
    const request = await fetch(`${API_BASE_URL}/tasks/search/?`, {
        headers,
        method: 'GET'
    });
    const data = await request.json();
    return data;
}

async function searchAllLeads(){
    const request = await fetch(`${API_BASE_URL}/leads/search/?`, {
        headers,
        method: 'GET'
      });
      const data = await request.json();
      return data;    
}



// Aquí vamos a exponer sólo los métodos que necesitamos
module.exports = {
  getTask,
  searchAllTasks,
  searchAllLeads
}