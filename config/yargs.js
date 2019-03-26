const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de una tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Lista todas las tareas', {
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = { argv }