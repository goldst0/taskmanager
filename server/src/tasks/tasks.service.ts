import { Injectable } from '@nestjs/common';
import { Task } from './task';
import { NewTaskInput } from './dto/newTask.input';

let tasks = [
  {
    id: 1,
    title: '三匹の子豚',
    content: '狼がお尻を焼かれる',
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'ピノキオ',
    content: '鯨に食べられる',
    createdAt: new Date(),
  },
  {
    id: 1,
    title: '眠れる森の美女',
    content: '糸車に殺される',
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'シンデレラ',
    content: 'ドレスがなくなる',
    createdAt: new Date(),
  },
  {
    id: 1,
    title: '赤ずきん',
    content: '狼が殺される',
    createdAt: new Date(),
  },
] as Task[];

@Injectable()
export class TasksService {
  findAll(): Promise<Task[]> {
    return Promise.resolve(tasks);
  }

  findOneById(id: number): Promise<Task> {
    const task = tasks.find((task) => task.id === id);
    return Promise.resolve(task);
  }

  create(data: NewTaskInput): Promise<Task> {
    const task: Task = {
      ...data,
      id: Date.now(),
      createdAt: new Date(),
    };
    tasks.push(task);

    return Promise.resolve(task);
  }

  async remove(id: number): Promise<boolean> {
    tasks = tasks.filter((task) => task.id !== id);

    return true;
  }
}
