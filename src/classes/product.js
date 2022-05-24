class Product {
    constructor(id, name, price, thumbnails) {
        this.id = id ? parseInt(id) : undefined;
        this.name = name;
        this.price = parseFloat(price);
        this.thumbnails = thumbnails;
    }
}

export default Product;