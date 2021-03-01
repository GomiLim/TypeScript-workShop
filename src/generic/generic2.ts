interface User {
  name : string;
}

class LocalDB<T> {
  constructor (private localStorageKey: string) {

  }
  add (v: T) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(v));
  }

  get (): T {
    const v = localStorage.getItem(this.localStorageKey);
    return (v) ? JSON.parse(v) : null
  }
}

// 제네릭으로 타입을 설정해 준다음
// interface로 특정 타입을 지정해준 뒤, 제네릭으로 타입 선언해준 위치에 생성한 타입을 넣어준다면
// 해당값으로 한정해서 값 설정을 하게해 줄 수  있다!

interface User {
  name : string;
}
const userDB = new LocalDB<User>('user');
userDB.add({name : 'jay'});
const userA = userDB.get();
userA.name;

// interface User {
//   name : string;
// }

// class LocalDB {
//   constructor (private localStorageKey: string) {

//   }
//   add (v: User) {
//     localStorage.setItem(this.localStorageKey, JSON.stringify(v));
//   }

//   get (): User {
//     const v = localStorage.getItem(this.localStorageKey);
//     return (v) ? JSON.parse(v) : null
//   }
// }