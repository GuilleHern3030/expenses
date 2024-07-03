import styles from './Header.module.css'

import LanguageSelector from '../languaje/Language'

export default ({text}) => {

    return <>
        <header>
            <h1>{text}</h1>
            <hr/>
            <LanguageSelector className={styles.language}/>
        </header>
    </>
}