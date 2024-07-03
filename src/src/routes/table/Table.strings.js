export default (content, lang) => {

    const language = lang || getLanguage();

    switch (content) {

        case "category":
            return language == "es" ? "Categoría"
                : "Category"

        case "article":
            return language == "es" ? "Articulo"
                : "Article"

        case "price":
            return language == "es" ? "Precio"
                : "Price"

        case "amount":
            return language == "es" ? "Cantidad"
                : "Amount"

        case "total":
            return language == "es" ? "Total"
                : "Total"

        case "accept":
            return language == "es" ? "Aceptar"
                : "Accept"

        case "cancel":
            return language == "es" ? "Cancelar"
                : "Cancel"

        case "ask_usd_price":
            return language == "es" ? "¿Cuál es el valor del dolar actualmente?"
                : "What is the value of the dollar currently?"

        default: return "";
    }
}