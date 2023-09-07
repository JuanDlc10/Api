const { Schema, models, model } = require("mongoose");

const ClienteSchema = new Schema({
    nombres: {
        type: String,
        require: true
    },
    apellidos: {
        type: String,
        require: true
    },
    telefono: {
        type: Number,
        require: true
    },
    direccion: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
})
module.exports = model("Cliente", ClienteSchema)