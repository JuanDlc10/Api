const { Router } = require("express");
const Cliente = require("../models/Cliente");

const router = Router();

router.get("/",async(req,res) => {
    try {
        const clientes = await Cliente.find({})
        res.json({
            ok: true,
            msg: "Clientes obtenidos con exito",
            clientes: clientes
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Contacta con el admin"
        })
    }
}) //middleware: Es un intermediario para validar datos.

router.get("/:id", (req,res) => {
   res.json({
    ok:true,
    msg: req.params.id
   }) 
}) //Asi se indica que una ruta va a recibir una variable que se llame id

router.post("/", async(req, res) => {
    try {
        const cliente = new Cliente(req.body);
        await cliente.save();
        res.json({
            ok: true,
            msg: "Cliente agregado con exito!"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Contacta con el admin"
        })
    }
})

module.exports = router;