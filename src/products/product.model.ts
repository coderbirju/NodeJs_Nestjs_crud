export class Product {
    // id: string;
    // title: string;
    // description: string;
    // price: number;
    // constructor(id: string,title: string,description: string,price: number){
    //     this.id = id;
    //     this.title = title;
    //     this.description = description;
    //     this.price = price;
    // }
    // instead we can do
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public price: number) {}
}
