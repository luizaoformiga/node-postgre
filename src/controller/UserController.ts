import { getRepository } from 'typeorm';
import { Tasks } from '../models/tasks';
import { Request, Response } from 'express';

export default class userControl { 
    async get(request: Request, response: Response) {
        try {
          const task = await getRepository(Tasks).find();
          return response.status(200).json(task);

        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async getId(request: Request, response: Response) {
        try {
          const { id } = request.params;
          const task = await getRepository(Tasks).findOne(id);
          return response.json(task);

        } catch (error) {
          return response.status(500).json(error);  
        }
    }

    async post(request: Request, response: Response) {
        try {
          const task = await getRepository(Tasks).save(request.body);
          return response.json(task);

        } catch (error) {
          return response.status(500).json(error);  
        }
    }  

    async put(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const task = await getRepository(Tasks).update(id, request.body);
       
            if(task.affected === 1) {
              const tasksUpdate = await getRepository(Tasks).findOne(id);
              return response.json(tasksUpdate);
            } 
      
            return response.status(404).json({ message: 'Tasks not found'});
            
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async patch(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const task = await getRepository(Tasks).update(id, { finished: true });
     
            if(task.affected === 1) {
              const tasksUpdate = await getRepository(Tasks).findOne(id);
              return response.json({ message: ' Task Finished'});
            }
     
            return response.status(404).json({ message: 'NOT FOUND'});
            
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async delete(request: Request, response: Response) {
        try {
          const { id } = request.params;
          const task = await getRepository(Tasks).delete(id);

          if(task.affected === 1) {
            const tasksUpdate = await getRepository(Tasks).findOne(id);
            return response.json({ message: ' Task removed'});
          }

          return response.status(404).json({ message: 'NOT FOUND'});
          
        } catch (error) {
          return response.status(500).json(error);  
        }
    }
}


