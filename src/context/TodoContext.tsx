import { createContext, PropsWithChildren, useRef, useState } from 'react';

type Todo = {
  id: any;
  text: string;
};

type TodosContextObj = {
  todos: Todo[];
  onAddTodoHandler: (text: string) => void;
  onUpdateTodoHandler: (id: any, text: string) => void;
  onRemoveTodoHandler: (id: any) => void;
};

export const TodoContext = createContext<TodosContextObj>({
  todos: [],
  onAddTodoHandler: (text: string) => {},
  onUpdateTodoHandler: (id: any, text: string) => {},
  onRemoveTodoHandler: (id: any) => {},
});

export default function TodoContextProvider({ children }: PropsWithChildren) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const nextId = useRef(0);

  const onAddTodoHandler = (text: string) => {
    setTodos((prev) => [...prev, { id: nextId, text }]);
    nextId.current += 1;
  };

  const onUpdateTodoHandler = (id: any, text: string) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? todo.text : todo)));
  };

  const onRemoveTodoHandler = (id: any) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        onAddTodoHandler,
        onUpdateTodoHandler,
        onRemoveTodoHandler,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
