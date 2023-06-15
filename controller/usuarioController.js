const Usuario = require("../model/usuarioModel");
module.exports = class usuarioController{

 static async UsuarioCreate(req,res){
 let nome = req.body.nome;
 let email = req.body.email;
 let senha = req.body.senha;
 const usuario = {
 nome: nome,
 email: email,
 senha: senha
 }
 await Usuario.create(usuario);
 res.json({message: "Usuário cadastrado com sucesso!"});
 }

 static async UsuarioListar(req,res){
 const id_usuario = req.params.id;
 if(id_usuario){
 const usuario = await Usuario.findOne({where: {id_usuario: id_usuario}});
 res.json(usuario);
 }else{
 const usuario = await Usuario.findAll({raw:true});
 res.json(usuario);
 }
}
  
}
