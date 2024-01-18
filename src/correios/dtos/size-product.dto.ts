import { ProductEntity } from "src/product/entities/product.entity";

export class SizeProductDto {
    wight: number;
    length: number;
    height: number;
    width: number;
    diameter: number;
    productValue: number;

    constructor(product: ProductEntity){
        this.wight = 2;
        this.length = 30;
        this.height = 30;
        this.width = 30;
        this.diameter = 30;
        this.productValue = product.price;
    }
}