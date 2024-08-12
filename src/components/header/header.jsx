import styles from './header.module.scss';
import { Nav } from '../Nav/nav';
import links from '../../data/links.json'
import { Logo } from '../logo/logo';
import logo from '../../images/logo.png'
import { Callback } from '../callback/callback';


export function Header({nav = true}) {
  return(
    <header className={styles.container} style={{marginTop: nav ? 19 : 100}}>
      <div className={styles.main_info}>
        <Logo iamage={logo} text={'SkillHunter'}/>
        {nav && <Nav linksInfo={links}/>}
      </div>
      <Callback/>
    </header>
  )
}