const mongoose= require('mongoose')
const urlbd="mongodb://localhost:27017/UTMA"

mongoose.connect(urlbd)
.then(()=>{
    console.log("funciona la conexión a la base de datos")
})
.catch((error)=>{
    console.log("no funciona la conexión a la base de datos", error)
})

const EsquemaAlumnos = new mongoose.Schema({
    name:{
        type:String
    },
    apepat:{
        type:String
    },
    edad: {
        type: Number
    }
})
const modeloAlumnos = new mongoose.model("Tabla de alumnos", EsquemaAlumnos)

modeloAlumnos.create({
    name:"Jessica",
    apepat:"romo",
    edad:23
})