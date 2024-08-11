import styles from './cases.module.scss'
import phone1 from '../../images/HR_PNG9 1.png'
import phone2 from '../../images/HR_PNG9 1.png'
import phone3 from '../../images/HR_PNG7.png'
import cases from '../../images/Vector.png'
import cases_2 from '../../images/Vector_2.png'

export function Cases() {
    return (
        <div className={styles.container}>
            <img src={cases} alt="cases" className={styles.vector}/>
            <div className={styles.case_first}>
                <div className={styles.phone_container}>
                    <img src={phone1} alt="phone" className={styles.phone_1}/>
                    <img src={phone2} alt="phone" className={styles.phone_2}/>
                    <img src={phone3} alt="phone" className={styles.phone_3}/>
                </div>
                <div className={styles.info_container}>
                    <p className={styles.info_addInfo}>SMM</p>
                    <h2 className={styles.info_header}>CASES</h2>
                    <p className={styles.info_info}>Business positioning system in social networks.</p>
                </div>
            </div>
            <div className={styles.case_second}>
            <img src={cases_2} alt="cases" className={styles.vector_2}/>
            <div className={styles.info_container_2}>
                    <p className={styles.info_addInfo}>SMM</p>
                    <h2 className={styles.info_header}>CASES</h2>
                    <p className={styles.info_info}>Business positioning system in social networks.</p>
                </div>
                <div className={styles.phone_container}>
                    <img src={phone1} alt="phone" className={styles.phone_4}/>
                    <img src={phone2} alt="phone" className={styles.phone_2}/>
                    <img src={phone3} alt="phone" className={styles.phone_5}/>
                </div>
            </div>
        </div>
    )
}