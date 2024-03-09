import { createContext, PropsWithChildren, useRef, useState } from 'react';

type Todo = {
  id: any;
  text: string;
};

type TodosContextObj = {
  todos: Todo[];
  onAddTodoHandler: (text: string) => void;
  onUpdateTodoHandler: (id: any) => void;
  onRemoveTodoHandler: (id: any) => void;
};

export const TodoContext = createContext<TodosContextObj>({
  todos: [],
  onAddTodoHandler: (text: string) => {},
  onUpdateTodoHandler: (id: any) => {},
  onRemoveTodoHandler: (id: any) => {},
});

export default function TodoContextProvider({ children }: PropsWithChildren) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const nextId = useRef(0);

  const onAddTodoHandler = (text: string) => {
    setTodos((prev) => [...prev, { id: nextId, text }]);
    nextId.current += 1;
  };

  const onUpdateTodoHandler = (id: any) => {};

  const onRemoveTodoHandler = (id: any) => {};

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
