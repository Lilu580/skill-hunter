import styles from './banner.module.scss';
import { BannerInfo } from '../BannerInfo/BannerInfo';
import { BannerCards } from '../bannerCards/bannerCards';


export function Banner () {
  return (
    <div className={styles.container}>
        <BannerInfo />
        <BannerCards />
    </div>
  )
}