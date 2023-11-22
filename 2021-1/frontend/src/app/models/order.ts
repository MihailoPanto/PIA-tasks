import { Item } from "./item";

export class Order{
    idN: number = 0;
    customer: string = "";
    date: Date = new Date();
    items: Item[] = null;
}