// 화살표 함수에서 사용하는 this
// 일반적인 함수에서 사용하는 this 다릅니다.

/**
 * 
일반적인 함수는 어떻게 그 함수가 호출되는지에 따라 자신의 this 값을 정의한다.
함수가 생성자인 경우는 새로운객체  = {}
객체의 메서드로 호출되는 경우는 호출하는 객체
undefined인 경우 전역 객체
등등 복잡해진다.
그래서 strict mode 에서는 아예 undefined 처리해서 사용하지 못 하게 한다.
사용하는 프레임워크에서 관용적으로 사용되고 있는 패턴이 아니라면 사용하지 않는게 건강에 좋다.
 * 
 */
const hc = { name: 'hc' };
const mj = { name: 'mj' };
function person() {
  console.log(1, this);
  (function test() {
    console.log(2, this);
  })();
  setTimeout(() => {
    console.log(3, this);
  }, 0);
}
// #1 함수호출
// person();
// #2 생성자 호출
// const person_instance = new person();
// #3 객체의 메서드로 호출

// function sayHi() {
//   console.log(`${this.name} hi ~`);
// }
// hc.sayHi = sayHi;
// hc.sayHi();
// mj.sayHi = sayHi;
// mj.sayHi();
// #4 바인딩
// person.call({ a: 'A' });

/**
 * 
화살표 함수에서 this는
함수를 선언한 변수가 this가 된다.(렉시컬 변수: 선언장소에 따라 상위스코프를 정함)
<=> 동적스코프: 호출장소에 따라 정함.
 * 
 */
const person2 = () => {
  console.log(1, this);
  // this.age = 0
  (function test() {
    console.log(2, this);
  })();
  setTimeout(() => {
    console.log(3, this);
  }, 0);
};
// #1 함수 호출
// person2();
// #2 화살표함수는 생성자 함수로 사용할 수 없다.
// const person2_instance = new person2();
// #3 객체의 메소드로 호출
// const saybye = () => {
//   console.log(`${this.name} bye ~`);
// };
// hc.saybye = saybye;
// hc.saybye();
// mj.saybye = saybye;
// mj.saybye();
// #4 바인딩 사용불가
// person2.call({ b: 'B' });

/**
 *  
typescript에서는 함수내부에서 this를 사용할 수 없다.
class에서 사용가능.
위에서 본 것과 같이 this의 타입이 정해지지 않기 때문이다.
*
*/
// class Car {
//   engine: string;
//   constructor(engine: string) {
//     this.engine = engine;
//   }
//   disp(): void {
//     console.log(1, this.engine);
//   }
// }
// const obj = new Car('XXSY1');
// console.log(2, obj.engine);
// obj.disp();
