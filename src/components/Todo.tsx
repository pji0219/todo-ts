import React from 'react';

type Props = {
  id: number;
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
