import { Router } from "express";
import { createFakeProducts } from '../controllers/products-controller.js';

const routerProducts = Router();

routerProducts.route('/productos-test')
    .get(async (req, res) => {

        const products = await createFakeProducts();
        if (products.length > 0) {
            res.status(200).json(products);
        } else {
            res.status(404).send({ message: "Products not found" });
        }
    })

export default routerProducts