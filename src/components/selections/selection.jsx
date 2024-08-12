import styles from './selection.module.scss'
import statistic from '../../images/bar_chart.svg'
import circle from '../../images/Vector2.svg'
import addCircle from '../../images/add_circle.svg'
import number from '../../images/2630.svg'
import image1 from '../../images/triple/Group 24 (1).png';
import { Circle } from '../circle/circle';
import image2 from '../../images/triple/Frame 151.png'


export function Selection() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.circle}><Circle/></div>

            <div className={styles.header_container}>
                <div className={styles.info_container}>
                    <p className={styles.info_additional}>CASE</p>
                    <h1 className={styles.info_header}>Selection of IT specialists</h1>
                    <p className={styles.info_content}>Objective: Select and train promising IT engineers</p>
                </div>
                <div className={styles.list_container}>
                    <p className={styles.list_header}>Tools:</p>
                    <ul className={styles.list_list}>
                        <li className={styles.list_item}><p>- IT specialists' qualification assessment system;</p></li>
                        <li className={styles.list_item}><p>- Personnel reserve selection system;</p></li>
                        <li className={styles.list_item}><p>- Candidate training system;</p></li>
                        <li className={styles.list_item}><p>- New employee support system.</p></li>
                    </ul>
                </div>
            </div>
            <div className={styles.statistic_container}>
                <div className={styles.statistic_card}>
                    <div className={styles.statistic_images}>
                        <img src={statistic} alt="stats" />
                        <div className={styles.statistic_images_add}>
                            <img src={circle} alt="circle" />
                            <img src={addCircle} alt="add circle" />
                        </div>
                    </div>
                    <img src={number} alt="2630" className={styles.statistic_number}/>
                    <p className={statistic.content}>Resumes received</p>
                </div>

                <div className={styles.statistic_card}>
                    <div className={styles.statistic_images}>
                        <img src={statistic} alt="stats" />
                        <div className={styles.statistic_images_add}>
                            <img src={circle} alt="circle" />
                            <img src={addCircle} alt="add circle" />
                        </div>
                    </div>
                    <img src={number} alt="2630" className={styles.statistic_number}/>
                    <p className={statistic.content}>Resumes received</p>
                </div>

                <div className={styles.statistic_card}>
                    <div className={styles.statistic_images}>
                        <img src={statistic} alt="stats" />
                        <div className={styles.statistic_images_add}>
                            <img src={circle} alt="circle" />
                            <img src={addCircle} alt="add circle" />
                        </div>
                    </div>
                    <img src={number} alt="2630" className={styles.statistic_number}/>
                    <p className={statistic.content}>Resumes received</p>
                </div>

                <div className={styles.statistic_card}>
                    <div className={styles.statistic_images}>
                        <img src={statistic} alt="stats" />
                        <div className={styles.statistic_images_add}>
                            <img src={circle} alt="circle" />
                            <img src={addCircle} alt="add circle" />
                        </div>
                    </div>
                    <img src={number} alt="2630" className={styles.statistic_number}/>
                    <p className={statistic.content}>Resumes received</p>
                </div>
            </div>

            <div className={styles.triple_container}>
                <img src={image1} alt="image" />
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.circle_container}>
                <div className={styles.circle_white}><Circle white={true}/></div>
                <div className={styles.circle_yellow}><Circle/></div>
            </div>

            <div className={styles.header_container}>
                <div className={`${styles.info_container_2} ${styles.info_container}`}>
                    <p className={styles.info_additional}>CASE</p>
                    <h1 className={styles.info_header}>Selection of Digital Marketers</h1>
                </div>
                <div className={styles.list_container}>
                    <p className={styles.list_header}>Tools:</p>
                    <ul className={styles.list_list}>
                        <li className={styles.list_item}><p>- Creating an HR Funnel;</p></li>
                        <li className={styles.list_item}><p>- Expert assessment of soft skills;</p></li>
                        <li className={styles.list_item}><p>- Analysis of compliance with business requirements;</p></li>
                        <li className={styles.list_item}><p>- Selection of relevant candidates.</p></li>
                    </ul>
                </div>
            </div>

            <div className={styles.statistic_container}>
                <div className={styles.statistic_card}>
                    <div className={styles.statistic_images}>
                        <img src={statistic} alt="stats" />
                        <div className={styles.statistic_images_add}>
                            <img src={circle} alt="circle" />
                            <img src={addCircle} alt="add circle" />
                        </div>
                    </div>
                    <img src={number} alt="2630" className={styles.statistic_number}/>
                    <p className={statistic.content}>Resumes received</p>
                </div>

                <div className={styles.statistic_card}>
                    <div className={styles.statistic_images}>
                        <img src={statistic} alt="stats" />
                        <div className={styles.statistic_images_add}>
                            <img src={circle} alt="circle" />
                            <img src={addCircle} alt="add circle" />
                        </div>
                    </div>
                    <img src={number} alt="2630" className={styles.statistic_number}/>
                    <p className={statistic.content}>Resumes received</p>
                </div>

                <div className={styles.statistic_card}>
                    <div className={styles.statistic_images}>
                        <img src={statistic} alt="stats" />
                        <div className={styles.statistic_images_add}>
                            <img src={circle} alt="circle" />
                            <img src={addCircle} alt="add circle" />
                        </div>
                    </div>
                    <img src={number} alt="2630" className={styles.statistic_number}/>
                    <p className={statistic.content}>Resumes received</p>
                </div>
            </div>

            <div className={styles.image_container}>
                <img src={image2} alt="image" />
            </div>
        </div>
        </>
    )
}