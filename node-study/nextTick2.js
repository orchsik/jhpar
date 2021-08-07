// 3, 3, 3
// 현재 작업 i에 할당 다 되고 나서, nextTick 실행되므로.
for (var i = 0; i < 3; i++) {
  process.nextTick(function () {
    console.log(111);
    console.log("work", i);
  });
}

// 1, 2, 3
// 클로저로 강제할 수는 있음.
for (var i = 0; i < 3; i++) {
  (function (_i) {
    process.nextTick(function () {
      console.log("work", _i);
    });
  })(i);
}

// 1, 2, 3
// i 를 immutable 하게 쓰면 그냥 됨
for (const i of [1, 2, 3]) {
  process.nextTick(() => {
    console.log("nextTick");
    console.log("work", i);
  });
}
