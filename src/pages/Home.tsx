import Navbar from '../components/Navbar';
import NewTodo from '../components/NewTodo';
import Todo from '../components/Todo';
import Lists from '../components/UI/Lists';
import { useTodoContext } from '../context/TodoContext';
import useSetTodos from '../hooks/useSetTodos';

export default function Home() {
  const { todos } = useTodoContext();

  useSetTodos(todos);

  return (
    <>
      <Navbar />
      <Lists>
        {todos?.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
          />
        ))}
      </Lists>
      <NewTodo />
    </>
  );
}
