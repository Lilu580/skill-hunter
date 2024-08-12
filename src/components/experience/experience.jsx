import styles from './experience.module.scss';
import arrow from '../../images/Arrow 1 (Stroke).svg'

export function Experience() {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Time-tested <br/> experience</p>
            <img src={arrow} alt="arrow" />
            <p className={styles.header}>Community of experts</p>
            <div className={`${styles.elipse_outer} ${styles.elipse_outer_2}`}>
                <div className={`${styles.elipse_inner} ${styles.elipse_inner_2}`}>
                    3800 best experts from different niches.
                </div>
            </div>
            <p className={styles.header}>Effective work with personnel</p>
            <div className={styles.elipse_outer}>
                <div className={styles.elipse_inner}>
                    More than 1500 successful hires.
                </div>
            </div>
            <img src={arrow} alt="arrow" />
            <p className={styles.header}>Agency on the international market</p>
            <div className={`${styles.elipse_outer} ${styles.elipse_outer_3}`}>
                <div className={`${styles.elipse_inner} ${styles.elipse_inner_3}`}>
                More than 4.5 years of experience.
                </div>
            </div>
        </div>
    )
}