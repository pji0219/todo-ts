import Lists from '../components/UI/Lists';
import CompletedTodo from '../components/CompletedTodo';
import { useTodoContext } from '../context/TodoContext';
import Navbar from '../components/Navbar';
import NewTodo from '../components/NewTodo';
import useSetTodos from '../hooks/useSetTodos';

export default function Completed() {
  const { todos } = useTodoContext();

  useSetTodos(todos);

  const filtered = todos.filter((todo) => todo.isCompleted);

  return (
    <>
      <Navbar />
      <Lists>
        {filtered?.map((todo) => (
          <CompletedTodo key={todo.id} text={todo.text} />
        ))}
      </Lists>
      <NewTodo />
    </>
  );
}
