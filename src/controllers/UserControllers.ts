import { Request, Response } from 'express';
import { json } from 'stream/consumers';
const Users = require('../users.json');
import * as Yup from 'yup';

// yarn add yup @types/yup
const userSchema = Yup.object().shape({
    name: Yup.string().required(),
    sexo: Yup.string().email().required(),
    username: Yup.string().required(),
    _id: Yup.string().required(),
    idade: Yup.string().required(),
    
});
const deleteUserSchema = Yup.object().shape({
    sexo: Yup.string().email().required(),
});

interface Usuario{
    id:number;
    nome:String;
    sobrenome:String;
    email:String;
    sexo:String;
    idade:number;
}

interface Usuario{
    id:number,
    nome:string,
    sobrenome:string,
    email:string,
    sexo:string,
    idade:number
}

/**
 * Use o conteúdo da variável `Users` para desenvolver os métodos necessários
 */
export default {
    async listar(request: Request, response: Response){
        return response.json(Users).status(200);
    },

    async buscarId(request: Request, response: Response){
        let {id} = request.params;

        let user = Users.find((user: Usuario) => user.id == parseInt(id))

        return response.send(user).status(200)
    },
    
    async buscarIdade(request: Request, response: Response){
        let {idade} = request.body;

        if(!idade) return response.send({error: true, message: 'request inválida'}).status(201)

        let users = Users.filter(user => user.idade > idade);

        if(!users || users.length == 0)
            return response.send({error: true, message: 'não há usuários para esse filtro'}).status(400);
        
        return response.json(users)

    },

    async buscarSexo(request: Request, response: Response){
        let {sexo} = request.body;

        if(!sexo) return response.send({error: true, message: 'request inválida'}).status(201)

        let users = Users.filter((user: Usuario) => user.sexo.toLowerCase() == sexo.toLowerCase());

        if(!users || users.length == 0)
            return response.send({error: true, message: 'não há usuários para esse filtro'}).status(400);
        
        return response.json(users)

    }

};
