import styles from './button.module.scss';

export function Button({content}) {
  return(
    <a className={styles.container}>
        {content}        
    </a>
  )
}