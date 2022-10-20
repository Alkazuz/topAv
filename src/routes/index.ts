import express from 'express';
import UserController from '../controllers/UserControllers';
const routes = express.Router();

routes.get('/list' /**  */);

routes.post('/new', UserController.create);
routes.put('/update' UserController.update);
routes.get('/list', UserController.index);
routes.post('/find',UserController.findOne);
routes.post('/delete',UserController.delete);

export default routes;

/*import express from 'express';
import produtoController from '../controllers/userControlerProduto';
const produtoRoutes = express.Router();

produtoRoutes.post('/new', produtoController.create);
produtoRoutes.put('/update', produtoController.update);
produtoRoutes.get('/list', produtoController.index);
produtoRoutes.post('/find', produtoController.findOne);
produtoRoutes.post('/delete', produtoController.delete);

export default produtoRoutes;