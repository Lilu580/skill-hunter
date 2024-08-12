import styles from './experience.module.scss';
import arrow from '../../images/Arrow 1 (Stroke).svg'
import { Circle } from '../circle/circle';

export function Experience() {
    return (
        <div className={styles.circle_container}>
            <div className={styles.circle}><Circle /></div>
            <div className={styles.container}>
                <p className={styles.title}>Time-tested <br/> experience</p>
                <img src={arrow} alt="arrow" className={styles.arrow_1}/>
                <p className={`${styles.header} ${styles.header_2}`}>Community <br/>of experts</p>
                <div className={`${styles.elipse_outer} ${styles.elipse_outer_2}`}>
                    <div className={`${styles.elipse_inner} ${styles.elipse_inner_2}`}>
                        3800 best experts from different niches.
                    </div>
                </div>
                <p className={`${styles.header} ${styles.header_1}`}>Effective  <br/>work with  <br/>personnel</p>
                <div className={`${styles.elipse_outer} ${styles.elipse_outer_1}`}>
                    <div className={styles.elipse_inner}>
                        More than 1500 successful hires.
                    </div>
                </div>
                <img src={arrow} alt="arrow" className={styles.arrow_2}/>
                <p className={`${styles.header} ${styles.header_3}`}>Agency on the  <br/>international  <br/>market</p>
                <div className={`${styles.elipse_outer} ${styles.elipse_outer_3}`}>
                    <div className={`${styles.elipse_inner} ${styles.elipse_inner_3}`}>
                    More than 4.5 years of experience.
                    </div>
                </div>
            </div>
        </div>
    )
}