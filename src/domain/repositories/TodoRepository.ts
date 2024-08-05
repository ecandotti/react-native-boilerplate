import { Todo } from '../entities/Todo';

export interface TodoRepository {
  create(todo: Todo): Promise<void>;

  update(todo: Todo): Promise<void>;

  delete(id: string): Promise<void>;

  findById(id: string): Promise<Todo | null>;

  findAll(): Promise<Todo[]>;
}
