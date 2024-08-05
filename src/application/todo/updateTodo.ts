import { Todo } from '@/domain/entities/Todo';
import { TodoRepository } from '@/domain/repositories/TodoRepository';
import { TodoRepositoryImpl } from '@/infrastructure/repositories/TodoRepositoryImpl';

export class UpdateTodo {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository = new TodoRepositoryImpl()) {
    this.todoRepository = todoRepository;
  }

  async execute(todo: Todo): Promise<void> {
    await this.todoRepository.update(todo);
  }
}
