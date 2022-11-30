let mongoose = require("mongoose");

// cargar configuración
let appConfig = require("../config");

// inicializar la configuración 

let connectionPromise = mongoose.connect(appConfig.fullUrl);
connectionPromise.then(function(result){
    console.log("conexion a DB exitosas");
    console.log(result);
}).catch(function(err){
    console.log("Error en conexión a BD");
    console.log(err);
});