const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Es la base de la tabla de multiplicar'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe:'Es el numero hasta donde quieres las tablas'
    })
    .option('l',{
        alias: 'listar',
        demandOption: false,
        default: false,
        describe:'Muestra la tabla en consola'
    })
    .check((arg,options) => {
        if (isNaN(arg.b)) {
            throw 'La base tiene que ser un numero'
        }
        return true;
    })    
    .argv;

module.exports = argv;