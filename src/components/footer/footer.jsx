import styles from './footer.module.scss'
import image1 from '../../images/footer/lupl.png'
import image2 from '../../images/footer/ncr.png'
import image3 from '../../images/footer/retro_white-2.png'
import image4 from '../../images/footer/Main-Event.png'
import image5 from '../../images/footer/Student-Transportation-of-america-logo.png'
import image6 from '../../images/footer/schlumberger.png'
import image7 from '../../images/footer/tees.png'
import image8 from '../../images/footer2/EOS-1.png'
import image9 from '../../images/footer2/Vector.png'
import image10 from '../../images/footer2/Visionlink-1.png'
import image11 from '../../images/footer2/bestbuy.png'
import image12 from '../../images/footer2/expressfreight.png'
import image13 from '../../images/footer2/k2.png'
import image14 from '../../images/footer2/razorback.png'

export function Footer () {
    return (
        <footer className={styles.container}>
            <div className={styles.text_container}>
                <p className={styles.text}>Clients</p>
            </div>
            <div class={styles.logo_container}>
                <div class={styles.logo_wrapper}>
                <img src={image1} alt="Company 1" />
                <img src={image2} alt="Company 2" />
                <img src={image3} alt="Company 3" />
                <img src={image4} alt="Company 1" />
                <img src={image5} alt="Company 2" />
                <img src={image6} alt="Company 3" />
                <img src={image7} alt="Company 3" />
                <img src={image1} alt="Company 1" />
                <img src={image2} alt="Company 2" />
                <img src={image3} alt="Company 3" />
                <img src={image4} alt="Company 1" />
                <img src={image5} alt="Company 2" />
                <img src={image6} alt="Company 3" />
                <img src={image7} alt="Company 3" />
                </div>
            </div>
            <div class={styles.logo_container}>
                <div class={styles.logo_wrapper_2}>
                <img src={image8} alt="Company 1" />
                <img src={image9} alt="Company 2" />
                <img src={image10} alt="Company 3" />
                <img src={image11} alt="Company 1" />
                <img src={image12} alt="Company 2" />
                <img src={image13} alt="Company 3" />
                <img src={image14} alt="Company 3" />
                <img src={image8} alt="Company 1" />
                <img src={image9} alt="Company 2" />
                <img src={image10} alt="Company 3" />
                <img src={image11} alt="Company 1" />
                <img src={image12} alt="Company 2" />
                <img src={image13} alt="Company 3" />
                <img src={image14} alt="Company 3" />
                </div>
            </div>
        </footer>
    )
}