interface Person {
  name: string;
  say(message: string) : void;
}

interface Programmer {
  writeCode(requirment : string) : string;
}


abstract class Korean implements Person { 
  //추상클레스는 인스턴스화 할 수 없고 상속받는 하위 class에서 인스턴스화 시킨다.
  //getter setter 함수 다 정의 가능합니당
  //https://infoscis.github.io/2017/05/20/TypeScript-handbook-classes/
  //타입은 속성 키워드에 abstract 키워드를 사용해서 설정해주고 하위타입에서 다음 내용들(abstract으로 정의된것)을 가지게함
  public abstract jumin : number; //abstract 안에서 abstract키워드를 통해 타입을 정의해준것
  constructor(public name : string) {}

  say(message: string): void {
    throw new Error("Method not implemented.");
  }
  sat (msg: string) {
    console.log(msg)
  }

  abstract loveKimchi(): void; // 하위타입에서 정확
}

class KoreanProgrammer extends Korean implements Programmer {
  //korean 을 상속받았기떄문에 저기 안에 정의된것들을 다 정의해 줘야합니당
  constructor (public name: string, public jumin: number) {
    super(name); //extend를 통해 상속받으면 super을 꼭 불러와줘야함
  }

  writeCode(requirment: string): string {
    throw new Error("Method not implemented.");
  }
  say(message: string): void {
    throw new Error("Method not implemented.");
  }

  loveimchi () {
    console.log('love');
  }

  loveKimchi(): void {
    throw new Error("Method not implemented.");
  } //person 의 내용을 다 호함한 class 를 만들겠단 의미임
}

const ej = new KoreanProgrammer('ej', 2222);
// const ej2 = new Korean('ej'); // 추상 class 는 인스턴스화 시킬 수 없다


/*
  implements / extend / abstract

  extend : 상속받은것 추가될 내용만 정의해주면됨ㅁ
  implements와 : 정의된 애들을 무조껀 재정의해줘야힘
  abstract : 추상 임으로, 얘로 선언된 class 는 instance로 만들 수 없고, 상속? 받는 애를 통해서 만들 수 있음
              상속 받는 애는, abstract 키워드로 선언된 애들을 재정의 해줘야함

  https://doitnow-man.tistory.com/198
  https://juunone.netlify.app/typescript/extends/
*/