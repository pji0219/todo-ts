import {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from 'react';

type Todo = {
  id: any;
  text: string;
};

// 컨텍스트 타입
type TodosContextObj = {
  todos: Todo[];
  onAddTodoHandler: (text: string) => void;
  onUpdateTodoHandler: (id: any, text: string) => void;
  onRemoveTodoHandler: (id: any) => void;
};

// 초기 상태
const initialState = {
  todos: [],
  onAddTodoHandler: (text: string) => {},
  onUpdateTodoHandler: (id: any, text: string) => {},
  onRemoveTodoHandler: (id: any) => {},
};

// 컨텍스트 생성
export const TodoContext = createContext<TodosContextObj>(initialState);

export default function TodoContextProvider({ children }: PropsWithChildren) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const nextId = useRef(1);

  const onAddTodoHandler = (text: string) => {
    const newTodo = { id: nextId.current, text };

    setTodos((prev) => [...prev, newTodo]);
    nextId.current += 1;
  };

  const onUpdateTodoHandler = (id: any, text: string) => {
    const editedTodo = {
      id,
      text,
    };

    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? editedTodo : todo))
    );
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

export function useTodoContext() {
  return useContext(TodoContext);
}
