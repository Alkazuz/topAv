import { Request, Response } from 'express';
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

export default {
    async create(request: Request, response: Response) {
        const { name, sexo, username, _id, idade} = request.body;

        if (
            !(await userSchema.isValid({
                name,
                sexo,
                username,
                _id,
                idade,
            }))
        ) {
            return response
                .status(401)
                .json({ message: 'dados fornecidos incorretamente' });
        }

        const existing = await Users.findOne({ sexo });
        if (!existing) {
            const user = await Users.create({
                name,
                sexo,
                username,
                _id,
                idade,
            });
            return response.status(200).json({
                message: 'Usuario criado com sucesso',
                user,
            });
        }
        return response
            .status(201)
            .json({ message: 'Usuario ja existe no BD' });
    },
    async index(request: Request, response: Response) {
        // atribui à existing
        // o retorno da chamada do método find
        // no modelo User
        const existing = await Users.find();
        if (!existing) {
            return response
                .status(401)
                .json({ message: 'Nenhum usuario encontrado' });
        }
        return response.status(200).json(existing);
    },
    async update(request: Request, response: Response) {
        const { name, sexo, username } = request.body;

        const user = await Users.findOneAndUpdate(
            {
                name,
            },
            {
                sexo,
                username,
            }
        );
        if (user) {
            return response.status(200).json({ message: 'Usuario atualizado' });
        }
        return response.status(400).json({ message: 'usuario nao encontrado' });
    },
    async findOne(request: Request, response: Response) {
        const { name, sexo, username } = request.body;
        const user = await Users.find({
            $or: [{ name: name }, { sexo: sexo }, { username: username }],
        });
        if (user) {
            return response.status(200).json(user);
        }
        return response.status(400).json({ message: 'usuario nao encontrado' });
    },
    async delete(request: Request, response: Response) {
        const { sexo} = request.body;

        if (!(await deleteUserSchema.isValid({ sexo }))) {
            return response.status(401).json({ message: 'email invalido' });
        }
        const result = await Users.findOneAndDelete({ sexo });
        if (result) {
            return response
                .status(200)
                .json({ message: 'usuario removido com sucesso' });
        }
        return response.status(400).json({ message: 'usuario nao encontrado' });
    },
};
