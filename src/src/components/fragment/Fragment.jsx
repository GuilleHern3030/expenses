import styles from './Fragment.module.css'

import closeButton from '../../assets/close.png'
import { useRef } from 'react'

export default ({text, onAccept, onReject, acceptText="Accept", cancelText="Cancel"}) => {

    const input = useRef()

    const handleAccept = e => onAccept(input.current.value)

    const handleCancel = e => onReject()

    const stopPropagation = e => e.stopPropagation()

    return <div className={styles.fragment_background} onClick={handleCancel}>
        <div className={styles.fragment} onClick={stopPropagation}>
            <div className={styles.taskbar} onClick={handleCancel}>
                <img src={closeButton}/>
            </div>
            <p className={styles.text}>{text}</p>
            <input ref={input} className={styles.input} min='0' type="number"/>
            <div className={styles.buttonContainer}>
                <button onClick={handleAccept}>{acceptText}</button>
                <button onClick={handleCancel}>{cancelText}</button>
            </div>
        </div>
    </div>
}