class Cart {
    constructor(user, store = {}) {
        this.user = user;
        this.store = store;
    }
    ;
    put(id, product) {
        this.store[id] = product;
    }
    get(id) {
        return this.store[id];
    }
}
class PromotionCart extends Cart {
    addPromotion() {
    }
}
const cartJh = new Cart({ name: 'jh' });
const cartEj = new Cart({ name: 'ej' });
//# sourceMappingURL=class.js.map