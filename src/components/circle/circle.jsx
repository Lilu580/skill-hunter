import styles from './circle.module.scss'

export function Circle({white}) {
    return (
        <div className={white ? `${styles.container} ${styles.container_white}` : `${styles.container}`}>

        </div>
    )
}