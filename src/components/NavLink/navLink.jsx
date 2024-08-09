import styles from './navLink.module.scss';


export function NavLink ({text, path}) {
  return (
    <a href={path} className={styles.navLink}>{text}</a>
  )
}