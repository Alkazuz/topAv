import express from 'express';
import UserController from '../controllers/UserControllers';
const routes = express.Router();

routes.get('/listar', UserController.list);
routes.get('/:id', UserController.find);
routes.post('/idade', UserController.idade);
routes.post('/sexo', UserController.sexo);
// continuar aqui
export default routes;
