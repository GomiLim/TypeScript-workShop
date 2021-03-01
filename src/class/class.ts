interface User {
  name : string;
}
interface Product {
  price : number;
  id : string;
}

class Cart {
  // //1. 타입스크립트에서는 constructor안에 들어오는 정보들을 class 안에서 정의해줘야합니다
  // protected user: User; // class함수내에선 접슨 가능, 인스턴스에서는 접근불가, 상속은 가능
  // private store: object; // class함수내에선 접슨 가능, 인스턴스에서는 접근불가, 상속도 불가능
  // constructor (user$: User) {
  //   this.user = user;
  //   this.store = {};
  // } 

  //2.인라인에 접근 제한자 public과 private를 설정해주면 따로 선언 안해줘도 다읽어드릴 수 있게됨
  // {[id: string]: Product} = {}
  // Record<string, Product> = {}
  // 권한 파라미터명: 타입 = 초기값
  // public/private store: object = {}
  // constructor (public user: User, private store: Record<string, Product> = {}) {}; 
  constructor (public user: User, private store: {[id: string]: Product} = {}) {}; 
  
  put(id: string, product: Product) {
    this.store[id]= product; //나 이거 왜 안되는지 모르것는뎅
  }

  get(id: string) {
    return this.store[id];
  }
}

class PromotionCart extends Cart {
  addPromotion () {
    // 상속받은 이곳에서 protected인 user은 접근 가능하고
    // pricvate 인 store에는 접근이 불가능 하다.
    // this.
  }
}

const cartJh = new Cart({name : 'jh'});
const cartEj = new Cart({name : 'ej'});