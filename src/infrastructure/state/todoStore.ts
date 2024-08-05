import { create } from 'zustand';
import { Todo } from '@/domain/entities/Todo';
import { persistMiddleware } from './persistMiddleware';

const TODO_STORE_KEY = 'todos';

interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  error: Error | null;
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
}

export const useTodoStore = create<TodoState>(
  persistMiddleware(
    set => ({
      todos: [],
      isLoading: false,
      error: null,
      addTodo: todo => set(state => ({ todos: [...state.todos, todo] })),
      updateTodo: todo =>
        set(state => ({
          todos: state.todos.map(t => (t.id === todo.id ? todo : t)),
        })),
      deleteTodo: id =>
        set(state => ({
          todos: state.todos.filter(t => t.id !== id),
        })),
    }),
    TODO_STORE_KEY,
    ['isLoading', 'error']
  )
);
