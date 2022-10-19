import { Request, Response } from 'express';
import { json } from 'stream/consumers';
const Users = require('../users.json');

/**
 * Use o conteúdo da variável `Users` para desenvolver os métodos necessários
 */
export default {
    async list(request: Request, response: Response){
        return response.json(Users).status(200);
    },

    async find(request: Request, response: Response){
        let {id} = request.params;

        let user = Users.filter(u => u.id == id)
        if(user.length == 0) return response.send
            ({erro: true, message: 'usuário não encontrado'}).status(400)
        user = user[0];
        return response.send({error: false, user}).status(200)
    },
    
    async idade(request: Request, response: Response){
        let {idade} = request.body;

        if(!idade) return response.send({error: true, message: 'request inválida'}).status(201)

        let users = Users.filter(user => user.idade > idade);

        if(!users || users.length == 0)
            return response.send({error: true, message: 'não há usuários para esse filtro'}).status(400);
        
        return response.send({error: false, users})

    },

    async sexo(request: Request, response: Response){
        let {sexo} = request.body;

        if(!sexo) return response.send({error: true, message: 'request inválida'}).status(201)


        let users = Users.filter(user => user.sexo.toLowerCase() == sexo.toLowerCase());

        if(!users || users.length == 0)
            return response.send({error: true, message: 'não há usuários para esse filtro'}).status(400);
        
        return response.send({error: false, users})

    }

};
