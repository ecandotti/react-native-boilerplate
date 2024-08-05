import { Todo } from '@/domain/entities/Todo';
import { TodoRepository } from '@/domain/repositories/TodoRepository';
import { useTodoStore } from '@/infrastructure/state/todoStore';

export class TodoRepositoryImpl implements TodoRepository {
  async create(todo: Todo): Promise<void> {
    const { addTodo } = useTodoStore.getState();
    useTodoStore.setState({ isLoading: true });
    addTodo(todo);
    useTodoStore.setState({ isLoading: false });
  }

  async update(todo: Todo): Promise<void> {
    const { updateTodo } = useTodoStore.getState();
    updateTodo(todo);
  }

  async delete(id: string): Promise<void> {
    const { deleteTodo } = useTodoStore.getState();
    deleteTodo(id);
  }

  async findById(id: string): Promise<Todo | null> {
    const { todos } = useTodoStore.getState();
    return todos.find(todo => todo.id === id) || null;
  }

  async findAll(): Promise<Todo[]> {
    const { todos } = useTodoStore.getState();
    return todos;
  }
}
