import styles from './recruitment.module.scss'
import HR from '../../images/HR.png'
import { Button } from '../button/button'
import image from '../../images/HR AGENCy.png'

export function Recruitment () {
  return (
    <div className={styles.container}>
        <img src={image} alt="aggency "className={styles.agency}></img>
        <h1 className={styles.header}>RECRUITMENT <br/> SYSTEM</h1>
        <div className={styles.cards_container}>
            <p className={styles.card}>Attracting qualified candidates</p>
            <p className={styles.card}>Training of candidates</p>
            <p className={styles.card}>Training of candidates</p>
            <p className={styles.card}>Formation of corporate culture</p>
        </div>

        <div className={styles.strategy}>
            <div className={styles.list}>
                <h1 className={styles.header}>RECRUITMENT AND <br/> ADAPTATION <br/>STRATEGY</h1>
                <ul className={styles.strategy_list}>
                    <li className={styles.strategy_list_item}><p>- A comprehensive HR strategy from HR and business analytics specialists. </p></li>
                    <li className={styles.strategy_list_item}><p>- Solving recruitment and corporate culture problems with the help of SMM tools. </p></li>
                    <li className={styles.strategy_list_item}><p>- Streamlined process of recruitment and adaptation of personnel.</p></li>
                    <li className={styles.strategy_list_item}><p>- More than 75,000 best digital specialists in our database.</p></li>
                    <li className={styles.strategy_list_item}><p>- Candidates are trained according to the world's best personnel training systems and have practical, highly qualified experience.</p></li>
                </ul>
            </div>
            <img src={HR} alt="HR" />
        </div>

        <div className={styles.subscriptions}>
            <h1 className={styles.header}>PERSONNEL <br/>TRANDING SYSTEM</h1>
            <div className={styles.subscriptions_container}> 
                <div className={`${styles.subscriptions_card} ${styles.subscriptions_card_active}`}>
                    <h2 className={styles.subscriptions_header}>QUALIFICATION</h2>
                    <p className={styles.subscriptions_content}>
                    Candidates are trained according to the best global training systems, such as the outbuilding
                    system, where 90% of the training time is allocated to practice and 10% to theory, as well as
                    similar systems.
                    </p>
                    <Button content={'I`m interested'} active={false}/>
                </div>
                <div className={styles.subscriptions_card}>
                    <h2 className={styles.subscriptions_header}>TRANDING</h2>
                    <p className={styles.subscriptions_content}>
                        Qualified employees are trained according to the corporate system of the business partner, which
                        significantly increases the production efficiency of future employees.
                    </p>
                    <Button content={'I`m interested'} active={false}/>
                </div>
                <div className={styles.subscriptions_card}>
                    <h2 className={styles.subscriptions_header}>EMPLOYMENT</h2>
                    <p className={styles.subscriptions_content}>
                        We hire qualified and well-trained specialists, guaranteeing their high professional suitability and
                        efficiency. 
                    </p>
                    <Button content={'I`m interested'} active={false}/>
                </div>
                <div className={styles.subscriptions_card}>
                    <h2 className={styles.subscriptions_header}>SUPPORT</h2>
                    <p className={styles.subscriptions_content}>
                        We support new employees for six months after they join the company, enhancing their skills
                        and professional value.
                    </p>
                    <Button content={'I`m interested'} active={false}/>
                </div>
            </div>
        </div>

    </div>
  )
}