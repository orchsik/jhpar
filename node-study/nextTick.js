// process.nextTick()은 이벤트 루프의 일부가 아니라 nextTickQueue 로 별개다.
// 이벤트 루프의 현재 단계와 관계없이 현재 작업만 끝나면 바로 실행된다.
// 현재 작업? 동기작업들. 비동기작업은 전부 이벤트 루프에 들어간다.

// 언제 사용할까?
// 이벤트 루프를 계속 돌리기 전에 현재 작업의 오류처리, 불필요한 자원 정리하고 다음 이벤트 루프를 돌릴 수 있다.

// 주의사항
// process.nextTic() 재귀호출 처럼 남발하면, 다른 이벤트 루프의 작업들이 계속 기다려야 한다..

let bar;

setTimeout(() => {
  console.log("setTimeout - nextTickQueue 실행 후, 이벤트루프 실행.");
}, 100);
setImmediate(() => {
  console.log("setImmediate - nextTickQueue 실행 후, 이벤트루프 실행.");
});

const nextTickFunc = (cb) => process.nextTick(cb);
nextTickFunc(() => {
  console.log("nextTickFunc - ", { bar }); // 1
});

const syncFunc = (cb) => cb();
syncFunc(() => {
  console.log("syncFunc - nextTickQueue 실행 전, 현재 작업 실행.", { bar }); // undefined
});

console.log("Set bar - nextTickQueue 실행 전, 현재 작업 실행.");
bar = 1;

// function apiCall(arg, callback) {
//   if (typeof arg !== "string") {
//     return process.nextTick(
//       callback,
//       new TypeError("argument should be string")
//     );
//   }
// }

// apiCall(1, (e) => console.log("123", e));
