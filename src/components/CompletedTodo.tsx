import TodoContainer from './UI/TodoContainer';

type Props = {
  text: string;
};

export default function CompletedTodo({ text }: Props) {
  return (
    <TodoContainer>
      <span>{text}</span>
    </TodoContainer>
  );
}
