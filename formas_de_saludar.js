function saludar (nombre) {
    return `Hola ${nombre}`;
}
function saludarHolaMundo () {
    return 'Hola mundo'; 
}

module.exports = {
    /*propiedad : referencia */
    saludar : saludar,
    saludarHolaMundo : saludarHolaMundo 
}