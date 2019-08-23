import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductController {
    constructor(private readonly productsService: ProductsService) {}
    @Get()
    findAll(){
        return this.productsService.getAll();
    }
    @Get(':id')
    findOne(@Param('id') id){
        return this.productsService.getOne(id);
    }
    @Post()
    addProduct(@Body() completeBody) {
        this.productsService.insertProduct(completeBody);
        return completeBody;
    }

    @Put(':id')
    updatedProduct(@Body() fullBody) {
        let id = fullBody.id;
        this.productsService.updateOne(id, fullBody);
    }
    @Delete(':id')
    deleteProduct(@Param('id') id) {
        this.productsService.deleteOne(id);
    }
}
