import {NavLink} from '../NavLink/navLink'
import styles from './nav.module.scss'


export function Nav({linksInfo}) {
  return(
    <nav className={styles.container}>
        {linksInfo?.map(({text, path}) => (
            <NavLink text={text} path={path}></NavLink>
        ))}
    </nav>
  )
}