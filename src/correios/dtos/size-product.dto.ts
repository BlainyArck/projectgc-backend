import { ProductEntity } from "src/product/entities/product.entity";

export class SizeProductDto {
    wight: number;
    length: number;
    height: number;
    width: number;
    diameter: number;
    productValue: number;

    constructor(product: ProductEntity){
        this.wight = product.weight;
        this.length = product.length;
        this.height = product.height;
        this.width = product.width;
        this.diameter = product.diameter;
        this.productValue = product.price;
    }
}