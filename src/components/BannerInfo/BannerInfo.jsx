import styles from './BannerInfo.module.scss';
import { BannerRates } from '../BannerRates/bannerRates';


export function BannerInfo () {
  return (
    <div className={styles.container}>
        <div className={styles.main_info}>
            <h1 className={styles.main_info_header}>We create the best talent according to global standards</h1>
            <p className={styles.main_info_content}>
                We successfully close the most challenging digital 
                <br/> 
                vacancies. We are trusted by companies with
                <br/>
                expert and non-standard projects because of our results.</p>
        </div>
        <BannerRates/>
    </div>
  )
}