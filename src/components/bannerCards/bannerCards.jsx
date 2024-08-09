import styles from './bannerCards.module.scss';
import activeCard from '../../images/active_card.png';
import newCard from '../../images/new_card.png';
import card_1 from '../../images/card_1.png';
import card_2 from '../../images/card_2.png'



export function BannerCards ({info}) {
  return (
    <div className={styles.container}>
        <img src={newCard} alt="add card" className={styles.card}/>
        <img src={activeCard} alt="active card" className={styles.card}/>
        <img src={card_1} alt="card" className={styles.card}/>
        <img src={card_2} alt="card" className={styles.card}/>
    </div>
  )
}