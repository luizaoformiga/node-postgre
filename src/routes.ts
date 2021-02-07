import { Router, Request, Response } from 'express';
import { finishedTask, getTask, getTasks, removeTask, saveTask, updateTask } from './controller/UserController'; 

const route = Router();

route.get('/', (request: Request, response: Response) => {
    response.json({ message: 'hello' });
})

route.get('/tasks', getTasks);
route.get('tasks/:id', getTask);
route.post('/tasks', saveTask);
route.put('/tasks/:id', updateTask);
route.patch('/tasks/:id', finishedTask);
route.delete('/tasks/:id', removeTask);

export default route;