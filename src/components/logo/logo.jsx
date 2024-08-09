import styles from './logo.module.scss';

export function Logo({iamage, text}) {
  return(
      <a href="/#" className={styles.container}>
        <img src={iamage} alt="logo" className={styles.logo_image}/>
        <h1 className={styles.logo_title}>{text}</h1>
      </a>
  )
}