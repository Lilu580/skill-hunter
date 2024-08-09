import styles from './callback.module.scss';
import { Button } from '../button/button';

export function Callback() {
  return(
    <div className={styles.container}>
        <p className={styles.callback_content}>Request a callback and speak with an expert</p>
        <Button content={'write to the manager'} className={styles.callback_content}></Button>
    </div>
  )
}