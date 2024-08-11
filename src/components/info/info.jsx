import styles from './info.module.scss'
export function Info() {
    return (
        <div className={styles.container}>
            <ul>
                <li className={styles.content}><p>Expert evaluation of the effectiveness of training systems.</p></li>
                <li className={styles.content}><p>Systems for managing the growth of employee qualifications.</p></li>
                <li className={styles.content}><p>The best systems of training and support of personnel.</p></li>
                <li className={styles.content}><p>Recruitment and talent identification systems.</p></li>
                <li className={styles.content}><p>Recruitment and talent identification systems.</p></li>
                <li className={styles.content}><p>Systems for planning the development and retraining of the company's human resources.</p></li>
            </ul>
        </div>
    )
}