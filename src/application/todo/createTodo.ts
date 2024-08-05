import { Todo } from '@/domain/entities/Todo';
import { TodoRepository } from '@/domain/repositories/TodoRepository';
import { TodoRepositoryImpl } from '@/infrastructure/repositories/TodoRepositoryImpl';

export class CreateTodo {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository = new TodoRepositoryImpl()) {
    this.todoRepository = todoRepository;
  }

  async execute(title: string): Promise<void> {
    const todo = new Todo(Math.random().toString(36).substring(2), title);
    await this.todoRepository.create(todo);
  }
}
