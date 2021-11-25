export default class Product {
    name: string;
    price: number;
    description: string;
    id: number;

    constructor(
        name: string,
        value: number,
        description: string,
        id: number
        ) {
            this.name = name
            this.price = value
            this.description = description
            this.id = id
    }
}