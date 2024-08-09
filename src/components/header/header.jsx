import styles from './header.module.scss';
import { Nav } from '../Nav/nav';
import links from '../../data/links.json'
import { Logo } from '../logo/logo';
import logo from '../../images/logo.png'
import { Callback } from '../callback/callback';


export function Header() {
  return(
    <header className={styles.container}>
      <div className={styles.main_info}>
        <Logo iamage={logo} text={'SkillHunter'}/>
        <Nav linksInfo={links}/>
      </div>
      <Callback/>
    </header>
  )
}