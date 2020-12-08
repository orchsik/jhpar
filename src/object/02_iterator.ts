const _range = { from: 1, to: 5 };
// 아래와 같이 for..of가 동작할 수 있도록 하는 게 목표입니다.
// 직접 해보세요.
// for (let value of _range) {
//   console.log(value); // 1, 2, 3, 4, 5
// }

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 for...of 는 Symbol.iterator가 구현된 객체만 사용할 수 있습니다.
 next: () => { done:boolean, value?:any } 타입의 함수를 리턴하는 Symbol.iterator를 구현해야합니다.
 * 
 */
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]: function () {
    // Symbol.iterator는 이터레이터 객체를 반환합니다.
    // 2. 이후 for..of는 반환된 이터레이터 객체만을 대상으로 동작하는데, 이때 다음 값도 정해집니다.
    return {
      current: this.from,
      last: this.to,
      // 3. for..of 반복문에 의해 반복마다 next()가 호출됩니다.
      next() {
        // 4. next()는 값을 객체 {done:.., value :...}형태로 반환해야 합니다.
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};
// for (let value of range) {
//   console.log(value); // 1, 2, 3, 4, 5
// }

/**
 * 
 * 
 * 
 * 
 * 
 Symbol.iterator 와 next() 함수를 분리해서 구현해도 가능하다.
 */
const range2 = {
  from: 6,
  to: 10,
  current: 1,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};
// for (const value of range2) {
//   console.log(value);
// }

/**
 * 
 * 
 * 
 * 
 * 
 Symbol.iterator 를 명시적으로 호출해보자.
 for...of  도 아래와 유사한 방식으로 작동하는건가?
 */
const testString = 'NikeIsBetter';
const iterator = testString[Symbol.iterator]();
while (true) {
  let result = iterator.next();
  if (result.done) break;
  // console.log(result.value);
}

/**
 * 
 * 
 * 
 * 
 * 
 Symbol.iterator 가 구현된 객체 + 유사배열(인덱스와 length 프로퍼티가 있음)
 Array.from() 을 이용해 진짜 배열로 만들 수 있다.
 */
const testStringArr = Array.from(testString);
console.log({ testStringArr });

const rangeArr = Array.from(range as Iterable<undefined>);
const range2Arr = Array.from(range2 as Iterable<undefined>);
console.log({ rangeArr, range2Arr });

export {};
