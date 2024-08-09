import styles from './bannerRates.module.scss';
import people from '../../images/people.png';
import star from '../../images/star.png';
import innactiveStar from '../../images/star_inactive.png'

export function BannerRates () {
  return (
    <div className={styles.container}>
      <img src={people} alt="people" />
      <div className={styles.stars}>
        <img src={star} alt='star' />
        <img src={star} alt='star' />
        <img src={star} alt='star' />
        <img src={star} alt='star' />
        <img src={innactiveStar} alt='innactiveStar' />
      </div>
    </div>
  )
}