class Cart {
    constructor (id, timestamp, product = [], total) {
        this.id = id,
        this.timestamp = timestamp,
        this.product = product,
        this.total = total
    }    
}

export default Cart;