/**
 *
 *
 *
 *
typescript는 기본적으로 for...of 의 대상으로 Array와 String 만 지원한다.
 */
const numList = [1, 2, 3, 4, 5];
const stringText = 'black sheep well';
for (const value of numList) {
  console.log(value);
}
for (const value of stringText) {
  console.log(value);
}

/**
 *
 *
 *
 *
Symbol.iterator가 구현되어 있는 객체도 for...of 를 사용하고 싶은 경우
tsconfig 파일의 downlevelIteration 옵션을 true로 설정하고 프로젝트를 다시 시작해보자
 */
// # 1 직접 [Symbol.iterator]를 구현
const human = {
  age: 0,
  maxAge: 100,
  [Symbol.iterator]: function () {
    return {
      age: this.age,
      maxAge: this.maxAge,
      next() {
        if (this.age + 30 <= this.maxAge) {
          this.age = this.age + 30;
          return { done: false, value: this.age };
        } else {
          return { done: true };
        }
      },
    };
  },
};
for (const value of human) {
  console.log(value);
}

// # 2 배열,문자열은 아니지만 구현되어있는 내장객체
const uniques = [...new Set([1, 2, 3, 1, 1])];
console.log(uniques);

export {};
