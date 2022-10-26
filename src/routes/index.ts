import express from 'express';
import UserController from '../controllers/UserControllers';
const routes = express.Router();
routes.get('/usuario/listar',UserController.listar);
routes.get("/usuario/:id",UserController.buscarId);
routes.post("/usuario/idade",UserController.buscarIdade);
routes.post("/usuario/sexo",UserController.buscarSexo);
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