const { default: mongoose } = require("mongoose");

const conexion = async() => {
    try {
        await mongoose.connect(process.env.MONGOURI)
        console.log("Nos conectamos a la nasa con exito")
    } catch (error) {
        console.log(error);
        throw new Error ("fallo al conectarse a la BD");
    }
}

module.exports = conexion;