import { Injectable } from '@nestjs/common';
import { Product } from './product.model';
import { json } from 'body-parser';

@Injectable()
export class ProductsService {
    products: Product[] = [];
    insertProduct(Product) {
        const dt = new Date();
        Product.id = dt.getSeconds() + (60 * dt.getMinutes()) + (60 * 60 * dt.getHours());
        this.products.push(Product);
    }

    getAll() {
        return [...this.products];
    }

    getOne(id) {
        return (this.products.find((obj) => obj.id == id));
    }

    updateOne(id, object) {
        const index = this.products.findIndex((obj) => obj.id == id);
        this.products.splice(index, 1, object);
    }
    deleteOne(id)
    {
        const index = this.products.findIndex((obj) => obj.id == id);
        this.products.splice(index, 1);
    }
}
