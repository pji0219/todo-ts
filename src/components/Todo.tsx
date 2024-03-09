type Props = {
  id: any;
  text: string;
};

export default function Todo({ id, text }: Props) {
  return (
    <li>
      <p>{id}</p>
      <p>{text}</p>
    </li>
  );
}
