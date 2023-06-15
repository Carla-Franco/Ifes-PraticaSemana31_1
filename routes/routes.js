const express = require("express");
const router = express.Router();

const usuarioController = require("../controller/usuarioController");

router.get("/",(req, res) =>{
 return res.json({message: "Sistema de Cadastro de Usuários"});
})

router.post("/usuarios/Cadastrar", usuarioController.UsuarioCreate);
router.get("/usuarios/:id?", usuarioController.UsuarioListar);
module.exports = router;