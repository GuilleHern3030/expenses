import { useEffect, useRef, useState, useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext'
import { UsdContext } from '../../context/UsdContext'
import styles from './Article.module.css'

import Categories from '../categories/Categories'
import categories from '../../components/categories/Categories.module.js'


export default ({id, onArticleRemove, onArticleChange}) => {

    const language = useContext(LanguageContext)
    const { usdValue } = useContext(UsdContext)

    const [ price, setPrice ] = useState("")
    const [ amount, setAmount ] = useState("")
    const [ total, setTotal ] = useState(0)
    const [ totalUsd, setTotalUsd ] = useState("")

    const priceRef = useRef()
    const amountRef = useRef()
    const nameRef = useRef()
    const categoryRef = useRef()

    const actualizeState = () => {
        onArticleChange(
            id, 
            categoryRef.current.value, 
            nameRef.current.value, 
            Number(priceRef.current.value), 
            Number(amountRef.current.value)
        )
    }

    useEffect(() => {
        const totalPrice = Number(price) * Number(amount)
        setTotal(totalPrice)
        if (usdValue > 0) setTotalUsd(totalPrice * usdValue)
        actualizeState()
    }, [price, amount])

    const handleFocusOut = e => {
        actualizeState()
    }

    const handleEnterPressed = e => {
        if (e.key === 'Enter')
            actualizeState()
    }

    const handleSelectionOfCategory = (e) => {
        if (e.target.value === "$delete") onArticleRemove(id)
        else actualizeState()
    }

    const handleNumericInput = (e, prev, setter) => {
        const isANumber = str => !isNaN(parseFloat(str)) && isFinite(str)
        const value = parseInt(Number(e.target.value), 10);

        if (isANumber(e.target.value)) {
            e.target.value = value;
            setter(value)
        } 
        else if (e.target.value == "") {
            e.target.value = 0;
            setter(0)
        } else 
            e.target.value = prev;
    }

    return <>
        <Categories cRef={categoryRef} items={categories(language.get())} onCategorySelected={handleSelectionOfCategory}/>
        <input ref={nameRef} className={`input-${id} ${styles.tablecell}`} name='article' onBlur={handleFocusOut} onKeyDown={handleEnterPressed}/>
        <input ref={priceRef} className={`input-${id} ${styles.tablecell}`} name='price' min='0' onChange={e => handleNumericInput(e, price, setPrice)}/>
        <input ref={amountRef} className={`input-${id} ${styles.tablecell}`} name='amount' type='number' min='0' onChange={e => handleNumericInput(e, amount, setAmount)}/>
        <p className={`input-${id} ${styles.tablecell} total-price`}>${total}</p>
        <p className={`input-${id} ${styles.tablecell}`}>{totalUsd}</p>
    </>
}