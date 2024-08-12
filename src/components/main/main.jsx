import styles from './main.module.scss';
import { Header } from '../header/header'
import { Banner } from '../banner/banner';
import yellowEplipse from '../../images/yellow_elipse.png';
import blueElipse from '../../images/Ellipse 11.png'


export function Main () {
  return (
    <>
        <div className={styles.background_image}>

        </div>
        <div className={styles.container}>
            <Header />
            <Banner />
        </div>
    </>
  )
}