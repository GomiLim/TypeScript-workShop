interface Props {
  name: string;
  [key: string] : string; // 인덱스 타입의 키는, number 나 string 만 올 수 있습니다! = boolean 이런거 못옴
}
interface PropsNumber {
  name: string;
  [key: number] : string; // 인덱스 타입의 키는, number 나 string 만 올 수 있습니다! = boolean 이런거 못옴
}

const p : Props = {
  name: 'ej', //Props에서 name 은 필수 값이고, 이 외에는 다 있으면 있고 없으면 없어도 되는 값임!
  a: 'd',
  b: 'e',
  // c: 3 <- Props 에서 문자열로 넘기기로 했기떄문에 숫자넣으면 안됨
  0: 'd', // 숫자는 됨! 왜냐면, 문자 취급하기떄문이에용
  1: 'b'
}
const n : PropsNumber = {
  name: 'ej',
  0: 'd',
  1: 'b',
  // a: 'd', // key를 number로 고정시켜주면 키값에 문자 사용 불가
}

p['a']
p[0]

let keys: keyof Props; //string 또는 number 상태라 const 로는 선언할 수 없습니당
let keys1: keyof PropsNumber; //만약, Props 의 key 타입이 number 이라면, number | 'name' 타입으로 넘어옵니다.

interface User2 {
  name : string;
  age: number;
  hello(msg: string) : void;
}

let keyOfUser : keyof User2; // keyof는 언제 쓰냐? 인터페이스로 정의한 키들만 가져와서 타입으로 지정하고싶을떄 사용합니다.
//출력값 : let keyOfUser: "name" | "age" | "hello"

let helloMethod: User2["hello"]; // 키값을 불러서 그 값을 타입으로 사용할 수도 있어요
//출력값 : let helloMethod: (msg: string) => void

