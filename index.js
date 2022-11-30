console.log("Cargando configuración....");

// importar dependencias

const express = require("express");
var bodyParser = require("body-parser");
let cors = require("cors");
let session = require("express-session");

const appConfig = require("./config");

console.log ("Inicializar la aplicacion WEB....");

require("./db/dbInitializer");
const app = express();

app.use(bodyParser.json());
app.use(cors());

//middleware para las variables de inicio de sesion
app.use(
    session({
        secret: "mipalabrasecreta",
        cookie: {maxAge: 60000, secure: false},
    })
);

//middleware para logear cada peticion
app.use(function(req, res, next){
    if (req.session.MI_VAR > -1){
        req.session.MI_VAR = req.session.MI_VAR +1;
    } else {
        req.session.MI_VAR = 0;
    }
    console.log(req.session);
    next();
});

console.log ("Configurando Routers..");

const userDummyRouter = require("./routes/routerDummyUser")
const userRouter = require("./routes/routerUsers");
const { cookie } = require("express/lib/response");

app.use("/api/usuariosDummy", userDummyRouter);
app.use("/api/usuarios", userRouter);


app.get("/",
    
    function (req, res){
    res.send("Pagina de Inicio");
});

console.log("Iniciando Servidor");

let server = app.listen (
    appConfig.PORT, 
    function (){
        console.log ("La aplicacion WEB está escuchando en el puerto " + appConfig.PORT);
    }
);