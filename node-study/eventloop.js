setTimeout(() => {
  console.log("timeout");
}, 0);

setImmediate(() => {
  console.log("immediate");
});

/**
 * event loop는 다음 순서로 실행이 반복됨.
timer - setTimeout
pool  - callback
check - setImmediate
*/
