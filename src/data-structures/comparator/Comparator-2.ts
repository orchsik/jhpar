export default class Comparator {
  // 정적 메서드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없다.
  // 동일한 클래스 내의 다른 정적 메서드 내에서 정적 메서드를 호출하는 경우 키워드 this를 사용할 수 있다.
  static defaultCompareFunction(a: string | number, b: string | number) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }
  compare: Function;

  // 정적 메서드가 비정적 메서드에서 키워드this 를 써서는 직접적인 접근을 할 수 없다.
  // 바른 호출 방법은 CLASSNAME.STATIC_METHOD_NAME
  constructor(compareFunction?: Function) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  equal<T>(a: T, b: T) {
    return this.compare(a, b) === 0;
  }

  lessThan<T>(a: T, b: T) {
    return this.compare(a, b) < 0;
  }

  greaterThan<T>(a: T, b: T) {
    return this.compare(a, b) > 0;
  }

  lessThanOrEqual<T>(a: T, b: T) {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  greaterThanOrEqual<T>(a: T, b: T) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  reverse() {
    const compareOriginal = this.compare;
    this.compare = <T>(a: T, b: T) => compareOriginal(b, a);
  }
}
