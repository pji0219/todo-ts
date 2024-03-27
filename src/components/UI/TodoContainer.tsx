import { PropsWithChildren } from 'react';

import styles from './TodoContainer.module.css';

export default function TodoContainer({ children }: PropsWithChildren) {
  return <li className={styles.todo}>{children}</li>;
}
