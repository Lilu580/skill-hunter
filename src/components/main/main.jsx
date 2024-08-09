import styles from './main.module.scss';
import { Header } from '../header/header'
import { Banner } from '../banner/banner';


export function Main () {
  return (
    <>
        <div className={styles.background_image}/>
        <div className={styles.container}>
            <Header />
            <Banner />
        </div>
    </>
  )
}