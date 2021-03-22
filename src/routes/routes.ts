import { Router } from 'express';
import userControl from '../controller/UserController';

const route = Router();
const routeUser = new userControl();

route.get('/tasks', routeUser.get);
route.get('tasks/:id', routeUser.getId);
route.post('/tasks', routeUser.post);
route.put('/tasks/:id', routeUser.put);
route.patch('/tasks/:id', routeUser.patch);
route.delete('/tasks/:id', routeUser.delete);

export default route;