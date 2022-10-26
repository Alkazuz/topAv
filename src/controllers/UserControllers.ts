import { Request, Response } from 'express';
const Users = require('../users.json');

interface Usuario{
    id:number;
    nome:String;
    sobrenome:String;
    email:String;
    sexo:String;
    idade:number;
}

export default {
        //listar
        async listar(request: Request, response: Response) {
            const usuario = Users;
            if(usuario){
                return response.status(200).json(usuario);
            }
            return response.status(400).json({ message: 'nenhum usuário foi encontrado!' });
        },

        async buscarId(request : Request, response : Response){
            const {id} = request.params;
            const usuario = Users.find((usuario: Usuario)=>usuario.id===parseInt(id));
            if(usuario){
                return response.status(200).json(usuario);
            }
            return response.status(400).json({ message: 'usuario nao encontrado, confira o "iD" inserido' });
            
        },

        async buscarIdade(request : Request, response : Response){
            const {idade} = request.body;
            const resultado = Users.filter((usuario: Usuario)=>
                usuario.idade > idade);
            if(resultado){
                return response.status(200).json(resultado);
            }
            return response.status(400).json({message : 'usuario não encontrado, confira a idade inserida!'})
        },

        async buscarSexo(request : Request, response : Response){
            const {sexo} = request.body;
            const resultado = Users.filter((usuario:Usuario)=>
                usuario.sexo == sexo);
            if(resultado){
                return response.status(200).json(resultado);
            }
            return response.status(400).json({message: 'usuario não encontrado, confira o sexo inserido!'})
        },        
}