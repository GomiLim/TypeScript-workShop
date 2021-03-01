function createPromise<T>(x: T, time : number) { // 타입을 제네릭으로 선언해준것임. 타입에 대한 파라미터를 정의해준거임 : 타입변수 
  return new Promise<T>((resolve, reject) => {
  // return new Promise((resolve: (v: T) => void, reject) => {
    setTimeout(()=> {
      resolve(x);
    }, time);
  })
}

createPromise<string>('ddd', 100) //T 로 정의된 부분에 타입을 정해줄 수도 있음
  .then(v=> console.log(v));

function createTuple2 <T, U> (v1: T, v2: U) : [T, U] {
  return [v1, v2];
}

  const t1 = createTuple2('user1', 200);
  