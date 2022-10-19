import express from 'express';
import UserController from '../controllers/UserControllers';
const routes = express.Router();

routes.get('/listar', UserController.listar);
routes.get('/:id', UserController.buscarId);
routes.post('/idade', UserController.buscarIdade);
routes.post('/sexo', UserController.buscarSexo);
// continuar aqui
export default routes;
