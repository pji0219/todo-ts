import Todo from '../components/Todo';

const todos = [
  {
    id: 1,
    text: '코딩 하기',
  },
  {
    id: 2,
    text: '노래 부르기',
  },
];

export default function Home() {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} text={todo.text} />
      ))}
    </ul>
  );
}
