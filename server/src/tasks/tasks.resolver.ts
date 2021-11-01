import { NotFoundException } from '@nestjs/common';
import { Resolver, Args, Int, Mutation, Query } from '@nestjs/graphql';
import { Task } from './task';
import { TasksService } from './tasks.service';
import { NewTaskInput } from './dto/newTask.input';

@Resolver((of) => Task)
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Query((returns) => [Task])
  tasks(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Query((returns) => Task)
  async getTask(@Args({ name: 'id', type: () => Int }) id: number) {
    const task = await this.tasksService.findOneById(id);
    if (!task) {
      throw new NotFoundException(id);
    }
    return task;
  }

  @Mutation((returns) => Task)
  addTask(@Args('newTask') newTask: NewTaskInput): Promise<Task> {
    return this.tasksService.create(newTask);
  }

  @Mutation((returns) => Boolean)
  async removeTask(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.tasksService.remove(id);
  }
}
