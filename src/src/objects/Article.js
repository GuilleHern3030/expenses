export class Article {

    #id;
    #name;
    #category;
    #price;
    #amount;
    #removed;

    constructor(id, name, category, price, amount) {
        this.#id = id;
        this.#name = name != undefined ? name : "";
        this.#category = category != undefined ? category : "";
        this.#price = price != undefined ? price : "";
        this.#amount = amount != undefined ? amount : "";
        this.#removed = false;
    }

    remove() {
        this.#removed = true;
    }

    edit(category, name, price, amount) {
        this.#name = name;
        this.#category = category;
        this.#price = price;
        this.#amount = amount;
    }

    id = () => this.#id;
    price = () => this.#price;
    amount = () => this.#amount;
    name = () => this.#name;
    category = () => this.#category;
    isRemoved = () => this.#removed;

}