class LocalDB {
    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;
    }
    add(v) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(v));
    }
    get() {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}
const userDB = new LocalDB('user');
userDB.add({ name: 'jay' });
const userA = userDB.get();
userA.name;
//# sourceMappingURL=generic2.js.map