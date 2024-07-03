import styles from './Table.module.css'

import { useEffect, useLayoutEffect, useState, useContext } from 'react'
import { ArticlesContext } from '../../context/ArticlesContext'
import { UsdContext } from '../../context/UsdContext'
import { LanguageContext } from '../../context/LanguageContext'

import Article from '../../components/article/Article'
import Fragment from '../../components/fragment/Fragment'

import strings from './Table.strings.js'

export default ({loadFrom}) => {

    const { articles } = useContext(ArticlesContext)
    const { usdValue, setUsdValue } = useContext(UsdContext)

    const language = useContext(LanguageContext)

    const [ rows, setRows ] = useState()
    const [ validRows, setValidRows ] = useState(1)
    const [ total, setTotal ] = useState(0)
  
    const removeRow = id => {
        articles.remove(id)
        setValidRows(prev => prev-1)
    }

    const addRow = () => {
        articles.add()
        setValidRows(prev => prev+1)
    }

    const editRow = (id, category, name, price, amount) => {
        articles.edit(id, category, name, price, amount)
        setTotal(articles.totalPrice())
    }

    const usdPrice = () => {
        if (total > 0) {
            if (usdValue != undefined && usdValue > 0) {
                return `$${total * usdValue}`;
            }
        } 
        return "-";
    }

    // Actualize Rows
    useEffect(() => {
        const rowsArray = [];
        articles.getAll().forEach((article, index) => {
            if (article.isRemoved() === false)
                rowsArray.push(<Article key={index} id={index} onArticleRemove={removeRow} onArticleChange={editRow}/>)
        })
        setRows(rowsArray)
    }, [validRows, total])

    // Initial rows
    useLayoutEffect(() => { if (loadFrom == undefined && articles.length() == 0) addRow() }, [])

    const handleSetUsd = value => {
        if (value > 0) setUsdValue(value)
        else setUsdValue(undefined)
    }

    return <>
        <main className={styles.tableContainer}>
            { 
                usdValue === null ? <Fragment 
                    text={ strings("ask_usd_price", language.get()) }
                    acceptText={ strings("accept", language.get()) }
                    cancelText={ strings("cancel", language.get()) }
                    onAccept={handleSetUsd} 
                    onReject={handleSetUsd}/> : <></> 
            }
            <div className={styles.table}>
                <p className={styles.tableHeader}> { strings('category', language.get()) } </p>
                <p className={styles.tableHeader}> { strings('article', language.get()) } </p>
                <p className={styles.tableHeader}> { strings('price', language.get()) } </p>
                <p className={styles.tableHeader}> { strings('amount', language.get()) } </p>
                <p className={styles.tableHeader}> { strings('total', language.get()) } </p>
                <div className={styles.tableHeader}>
                    <p className={styles.usd} onClick={() => setUsdValue(null)}>USD</p>
                    { usdValue != undefined && <p className={styles.usdValue}>{`(${usdValue})`}</p> }
                </div>
                {rows}
                <p className={styles.tableFooter}></p>
                <p className={styles.tableFooter}></p>
                <p className={styles.tableFooter}></p>
                <p className={styles.tableFooter}></p>
                <p className={styles.total}>${total}</p>
                <p className={styles.total} style={{color:'darkgreen'}}>{usdPrice()}</p>
            </div>

            <div className={styles.tablePlusContainer}>
                <button className={styles.tablePlus} onClick={addRow}>+</button>
            </div>
        </main>
    </>
}