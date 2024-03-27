import { PropsWithChildren } from 'react';

import styles from './Lists.module.css';

export default function Lists({ children }: PropsWithChildren) {
  return <ul className={styles.todo_list}>{children}</ul>;
}
