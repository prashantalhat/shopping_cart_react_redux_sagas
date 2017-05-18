import _products from "./products"

const TIMEOUT = 100
const MAX_CHECKOUT = 2

export const api = {
    getProducts() {
        return new Promise(resolve => {
            setTimeout(() => resolve(_products), TIMEOUT)
        })
    },

    buyProducts(cart) {
        console.log('buyProducts');
        console.log(cart);
        return new Promise((resolve, reject) =>
            setTimeout(() => {
                if (Object.keys(cart.quantityById).length <= MAX_CHECKOUT)
                    resolve(cart)
                else
                    reject('you can buy ${MAX_CHECKOUT} items at maximum in a checkout')
            }, TIMEOUT)
        )
    }
}
