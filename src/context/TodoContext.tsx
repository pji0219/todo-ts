import {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from 'react';

export type Todo = {
  id: any;
  text: string;
  isCompleted: boolean;
};

// 컨텍스트 타입
type TodosContextObj = {
  todos: Todo[];
  onAddTodoHandler: (text: string) => void;
  onUpdateTodoHandler: (id: any, text: string, isCompleted: boolean) => void;
  onRemoveTodoHandler: (id: any) => void;
};

// 초기 상태
const initialState = {
  todos: [],
  onAddTodoHandler: (text: string) => {},
  onUpdateTodoHandler: (id: any, text: string, isCompleted: boolean) => {},
  onRemoveTodoHandler: (id: any) => {},
};

// 컨텍스트 생성
export const TodoContext = createContext<TodosContextObj>(initialState);

const localData = localStorage.getItem('todoData');

// 저장된 값을 조회해야 한다면, 객체로 변환해서 사용해야한다.
const todoData = localData ? JSON.parse(localData) : [];

export default function TodoContextProvider({ children }: PropsWithChildren) {
  const [todos, setTodos] = useState<Todo[]>(todoData);

  const nextId = useRef(1);

  const onAddTodoHandler = (text: string) => {
    const newTodo = { id: nextId.current, text, isCompleted: false };

    setTodos((prev) => [...prev, newTodo]);
    nextId.current += 1;
  };

  const onUpdateTodoHandler = (id: any, text: string, isCompleted: boolean) => {
    const editedTodo = {
      id,
      text,
      isCompleted,
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
