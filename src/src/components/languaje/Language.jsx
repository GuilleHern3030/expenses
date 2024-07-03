import style from './Language.module.css'
import spanishFlag from '../../assets/spanish-flag.webp'
import englishFlag from '../../assets/english-flag.webp'
import { LanguageContext } from '../../context/LanguageContext'
import { useContext } from 'react'

export default ({className=""}) => {

    const language = useContext(LanguageContext)
    
    return <div className={`${style.flags} ${className}`}>
        <div>
            <img id="es" src={spanishFlag} className={language.get() === "es" ? style.flag_active : style.flag} onClick={e => language.set(e.target.id)}/>
            <img id="en" src={englishFlag} className={language.get() === "en" ? style.flag_active : style.flag} onClick={e => language.set(e.target.id)}/>
        </div>
    </div>
}