import { PrintedProduct } from "./PrintedProduct";
export class Newspaper extends PrintedProduct {
    circulation!: number;
    page_number!: number;
    page_price!: number;
    constructor(name: string, circulation: number, page_number: number, page_price: number) {
        super(name);
        this.circulation = circulation;
        this.page_number = page_number;
        this.page_price = page_price;
    }
    override show() {
        let a: string = "Назва: "+ this.name + " Кількість сторінок: "+ this.page_number;
        let b: string = " Ціна сторінки: "+ this.page_price + " Тираж: "+this.circulation;
        return a + b;
    }
    CirculationCost() {
        return this.page_number * this.page_price * this.circulation;
    }
}