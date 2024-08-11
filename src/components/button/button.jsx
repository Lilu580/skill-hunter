import styles from './button.module.scss';

export function Button({content, active = true}) {
  return(
    <a className={`${styles.container} ${active ? styles.active : styles.innactive}` }>
        {content}        
    </a>
  )
}