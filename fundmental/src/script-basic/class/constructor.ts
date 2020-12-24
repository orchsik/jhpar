// class Rect {
//   // TypeScript의 클래스에서는 선언한 값만 객체의 프로퍼티 값으로 활용할 수 있다.
//   private width: number;
//   private height: number;
//   // ES2015의 static은 메소드 전용으로, 프로퍼티에는 활용할 수 없는 키워드다.
//   // TypeScript에서는 static 키워드를 프로퍼티에도 활용할 수 있다.
//   // static변수는 인스턴스에서 접근할 수 없다.
//   static count: number;

//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//     Rect.count++;
//   }

//   getArea() {
//     return this.width * this.height;
//   }
// }
// new Rect(10, 10);
// const rect = new Rect(10, 20);
// console.log(Rect.count);
// console.log(rect.getArea());

/**
 * 
 * 
  생성자에서도 접근 제한자를 사용할 수 있다.
  생성자로 넘겨지는 인수에 접근 제한자를 사용하게 되면
  클래스에 그 인수의 식별자 이름과 같은 식별자의 프로퍼티가 정의되고
  넘겨진 값으로 할당된다.
 */
// class Rect {
//   constructor(private width: number, private height: number) {}

//   getArea() {
//     return this.width * this.height;
//   }
// }
// const rect = new Rect(10, 10);
// console.log(rect.getArea());

/**
 * 
 * 
 * 
  readonly라는 특별한 제한자를 제공한다.
  읽기만 가능한 프로퍼티를 선언할 때 사용된다.
  쉽게 말해 프로퍼티를 위해 사용할 수 있는 const인 것이다.
  readonly는 접근 제한자와 섞어서도 사용할 수 있다. 다음과 같은 문법으로 사용한다.
 */
class Rect {
  private readonly width: number;
  private readonly height: number;
  constructor(width: number, height: number) {
    (this.width = width), (this.height = height);
  }

  set setWidth(width: number) {
    // this.width = width; // ERROR: Left-hand side of assignment expression cannot be a constant or a read-only property.
  }
}
