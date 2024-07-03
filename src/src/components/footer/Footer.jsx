import data from '../../data/data.json'
import styles from './Footer.module.css'

import gmailImg from '../../assets/gmail.webp'
import logoImg from '../../assets/logo.webp'

export default () => {
    return <>
        <footer>

            <p className={styles.footer__title}>Contact</p>

            <div className={styles.footer}>
                <div className={styles.footer__contact}>
                    <a className={styles.footer__contact_logo} href={data.credits}><img src={logoImg} alt="Home"/></a>
                </div>

                <div className={styles.footer__contact}>
                    <p className={styles.footer__credits}>©2023 Guillermo Hernandez</p>
                    <a className={styles.footer__contact_email} aria-label="email" href="mailto:hernandezguillermo1995@gmail.com?subject=Mail from homepage"><img src={gmailImg} alt="Gmail"/></a>
                </div>
            </div>
        </footer>
    </>
}