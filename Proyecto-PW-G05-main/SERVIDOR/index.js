import { sequelize } from './database/database.js';
import express from 'express';
import {Curso} from './models/Curso.js';
import {UsuarioCurso} from './models/UsuarioCurso.js'
// Importar modelos
import {Usuario} from './models/Usuario.js';


const app = express()
const port = 3001;

async function verificarConexion(){
    try {
        await sequelize.authenticate()
        console.log("Conexion a BD exitosa.");
        await sequelize.sync({force: true})
    }
    catch(error){
        console.error("Conexion no se logro.", error);
    }
}

app.get("/create-user", async function(req, res){
    const nuevoUsuario = await Usuario.create({
        nombre : "Pepe",
        codigo : "20123254",
        edad : 30

    })

    res.send("Usuario creado.");
})

app.get("/create-curso", async function(req,res){
    const nuevoCurso = await Curso.create({
        curso_nombre: "Matematicas",

    })
})

app.get("/create-cita", async function(req,res){
    const nuevoUsuarioCurso = await UsuarioCurso.create({
        usu_curso_nombre: "Cita1",

    })
})

app.get("/", function(req, res){
    res.send("Programación web");
})

app.listen(port, function(){
    console.log("Servidor ejecutándose en puerto " + port);
    verificarConexion();
})