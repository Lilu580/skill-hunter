import styles from './main.module.scss';
import { Header } from '../header/header'
import { Banner } from '../banner/banner';
import yellowEplipse from '../../images/yellow_elipse.png';
import blueElipse from '../../images/Ellipse 11.png'


export function Main () {
  return (
    <>
        <div className={styles.background_image}>
          <div className={`${styles.elipse} ${styles.elipse_blue} ${styles.elipse_blue_1}`}></div>
          <div className={`${styles.elipse} ${styles.elipse_blue} ${styles.elipse_blue_2}`}></div>
          <div className={`${styles.elipse} ${styles.elipse_blue} ${styles.elipse_blue_3}`}></div>
        </div>
        <div className={styles.container}>
            <Header />
            <Banner />
        </div>
    </>
  )
}