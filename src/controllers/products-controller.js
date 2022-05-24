import { faker } from '@faker-js/faker';
import Product from '../classes/product.js'

const CANT_PRODUCTS_DEFAULT = 5;


function createFakeProduct(id) {
    return new Product(id, faker.commerce.productName(), faker.commerce.price(), faker.image.image());
}


function getId(products) {
    const ids = products.map((product) => product.id);

    return ids.length > 0 ? Math.max(...ids) : 1;
}

const createFakeProducts = async () => {

    const products = [];
    for (let i = 0; i < CANT_PRODUCTS_DEFAULT; i++) {
        products.push(createFakeProduct(getId(products)))
    }
    return products;

}

export { createFakeProducts };