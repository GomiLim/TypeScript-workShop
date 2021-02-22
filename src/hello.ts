//option : --target es6, --lib es2015,dom, --module commonjs, --showConfig
//tsc hello.ts --target es6 --lib es2015,dom --module commonjs -showConfig
var hello = "hello";
let hello2 = "hello2"; //let 이 var로 들어오는군나아아
                       //tsc hello.ts --target es6 (최신 브라우저 대상으로 컴파일)


let timeoutPromise = new Promise ( (reslove, reject) => { //es5에 없는 문법이라고 나옵니다.
  setTimeout (() => {
    reslove("1 sec");
  }, 1000);
})


timeoutPromise.then(console.log);

import add from './util.js'; //dist 로 만들어질떄 js 로 읽게끔 만들어줘야하기때문이 확장자 생략을 하면 안되욤
const value = add(1,2);
console.log(value);

/* 
es5기준으로 컴파일을 돌리면, 이친구는 commonjs 기준으로 컴파일을 돌리기때문에 잘돌아가는데
target option 으로 es6를 잡으면 es6모듈인 화살표 함수, let 등으로 컴파일 된다.
node에서는 commonjs 기준으로 실행을 시키기때문에 위의 방법으로 실행시키면 문법에러가 나타난다.
 해결 :
target = es6/ module = commonjs 를 사용하면 됩니당

실제 적용된 옶
*/