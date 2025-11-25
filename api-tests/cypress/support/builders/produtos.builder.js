import { faker } from '@faker-js/faker';

export class ProductsBuilder{ 

    constructor(){  
        this.product = {
            nome: faker.commerce.productName(),
            preco: faker.number.int({ min: 10, max: 1000 }),
            descricao: faker.commerce.productDescription(),
            quantidade: faker.number.int({ min: 1, max: 100 })
        };
    }

    static new(){
        return new ProductsBuilder();
    }

    build(){
        return { ...this.product }; 
    }

} 