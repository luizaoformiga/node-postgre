import { getRepository } from 'typeorm';
import { Tasks } from '../entity/tasks';
import { Request, Response } from 'express';

// GET - GERAL
export const getTasks = async (request: Request, response: Response) => {
    const task = await getRepository(Tasks).find();
    return response.json(task);
}

// GET - ID ESPECÍFICO
export const getTask = async (request: Request, response: Response) => {
    const { id } = request.params;
    const task = await getRepository(Tasks).findOne(id);
    return response.json(task);
}


// POST
export const saveTask = async (request: Request, response: Response) => {
    const task = await getRepository(Tasks).save(request.body);
    return response.json(task);
} 


// PUT
export const updateTask = async(request: Request, response: Response) => {
    const { id } = request.params;
    const task = await getRepository(Tasks).update(id, request.body);
 
    if(task.affected === 1) {
        const tasksUpdate = await getRepository(Tasks).findOne(id);
        return response.json(tasksUpdate);
    } 

    return response.status(404).json({ message: 'Tasks not found'});
}

// PATCH
export const finishedTask = async (request: Request, response: Response) => {
    const { id } = request.params;
    const task = await getRepository(Tasks).update(id, {
        finished: true
    })

    if(task.affected === 1) {
        const tasksUpdate = await getRepository(Tasks).findOne(id);
        return response.json({ message: ' Task Finished'});
    }

    return response.status(404).json({ message: 'NOT FOUND'});
}

// DELETE
export const removeTask = async (request: Request, response: Response) => {
    const { id } = request.params;
    const task = await getRepository(Tasks).delete(id);

    if(task.affected === 1) {
        const tasksUpdate = await getRepository(Tasks).findOne(id);
        return response.json({ message: ' Task removed'});
    }

    return response.status(404).json({ message: 'NOT FOUND'});
}

