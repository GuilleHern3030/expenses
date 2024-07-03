import { createContext, useState } from "react";
import { Article } from "../objects/Article";

export const ArticlesContext = createContext()

export function ArticlesContextProvider(props) {

    const [ articlesArray, setArticlesArray ] = useState([])

    const add = () => {
        const articles = articlesArray;
        articles.push(new Article(articles.length))
        setArticlesArray(articles)
    }

    const create = (category, name, price, amount) => {
        const articles = articlesArray;
        articles.push(new Article(articles.length, category, name, price, amount))
        setArticlesArray(articles)
    }

    const remove = id => {
        const articles = articlesArray;
        articles[id].remove()
        setArticlesArray(articles)
    }

    const edit = (id, category, name, price, amount) => {
        const articles = articlesArray;
        articles[id].edit(category, name, price, amount)
        setArticlesArray(articles)
    }

    const get = id => articlesArray[id];

    const getAll = () => articlesArray;

    const length = () => articlesArray.length;

    const totalPrice = () => {
        let totalPrice = 0;
        const isNumber = str => !isNaN(parseFloat(str)) && isFinite(str)
        for (let id = 0; id < articlesArray.length; id++) {
            let price = isNumber(articlesArray[id].price()) ? Number(articlesArray[id].price()) : 0;
            let amount = isNumber(articlesArray[id].amount()) ? Number(articlesArray[id].amount()) : 0;
            totalPrice += price * amount;
        }
        return totalPrice;
    }

    return (<>
        <ArticlesContext.Provider value={
            {
                articles: {
                    add,
                    create,
                    remove,
                    edit,
                    get,
                    getAll,
                    length,
                    totalPrice
                }
            }
        }>
            {props.children}
        </ArticlesContext.Provider>
    </>)
}