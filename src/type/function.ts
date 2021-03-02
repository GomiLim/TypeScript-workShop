function add(x:number, y:number) :number {
  //          파라미터 타입          반환값 타입
  return x+y;
}

const result = add(1,2);

function buildUserInfo(name = "-", email = "") { // 익명의 가입자를 예견해서 이렇게 세팅함. 이렇게 기본값을 적어주면 타입선언 안해줘도 됩니다 (기본값의 타입을 받아들이기 때문)
  return {name, email}
}

const user1 = buildUserInfo();

const add2 = (a: number, b:number) : number => a+b;

interface Storage {
  a: string;
}
interface ColdStorage {
  b: string;
}

//어노테이션 :어노테이션이란 본래 주석이란 뜻으로, 인터페이스를 기반으로 한 문법이다. 
//주석과는 그 역할이 다르지만 주석처럼 코드에 달아 클래스에 특별한 의미를 부여하거나 기능을 주입할 수 있다.

//함수의 이름과, 인자(파라미터)타입, 반환 타입만 정의하는걸 함수 시드니처라고 하는데,
//함수 시그니처를 동일한 이름으로 여러개 선언하는걸 오버로드 시그니처 라고 하고, 그 목록을 오버로드 시그니처 목록이라함
//이렇게 만들어 놓으면 구현체를 만들어 줘야함

//오버로드 시그니처
function store(type: "과자"): Storage;
function store(type: "아이스크림"): ColdStorage;

//구현체              유니온 타입 (이거아님 이거!)
function store(type : "과자" | "아이스크림") {
  if(type === "과자") {
    return {a : "1.과자"}
  }else if (type === "아이스크림") {
    return {b : "2. 아이스크림"}
  }else {
    throw new Error ('unsupported type');
  }
}

const s = store('아이스크림');

/*
정리 
오버로드 시그니처는 파라미터 속성들에 따라 다르게 반환되는 값들의 속성을 다르게 설정하고 싶을떄 쓰는데,
바디가 없는 오버로드 시그니처는 파라미터 타입과 반환타입을 잘 정의해줘야한다 (바디 x)
구현체에서는 바디가 존재하며, 파라미터로 오버로드 시그니처에서 설정해준 파라미터 타입들을 잘 들고 와야하며
파라미터 값에 따라 다른 값들을 리턴해 줘야지 오류가 안난다.
ex)
과자와 아이스크림이 들어올 수 있는 경우, 분기를 태워서
과자 의 경우 'a: strign'을 반환해 줘야하고 
아이스크림의 경우 'b: string'을 반환해줘야한다.
*/