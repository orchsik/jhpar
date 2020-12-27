// 세준이는 양수와 +, -, 그리고 괄호를 가지고 식을 만들었다. 그리고 나서 세준이는 괄호를 모두 지웠다.
// 그리고 나서 세준이는 괄호를 적절히 쳐서 이 식의 값을 최소로 만들려고 한다.
// 괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.

export const solution = (mathmeticaleExpression: string) => {
  const mathExpressionList = mathmeticaleExpression.split('-');
  let minimum = 0;
  for (let i = 0; i < mathExpressionList.length; i++) {
    if (i === 0) {
      minimum += eval(mathExpressionList[i]);
    } else {
      minimum -= eval(mathExpressionList[i]);
    }
  }
  console.log({ minimum });

  return minimum;
};

// TEST
var mathmeticaleExpression = '55-50+40';
var R = solution(mathmeticaleExpression);
console.log(R);

var mathmeticaleExpression = '55-50+40-30';
var R = solution(mathmeticaleExpression);
console.log(R);

var mathmeticaleExpression = '1-2+3-4-5+6+7-8-9';
var R = solution(mathmeticaleExpression);
console.log(R);

/**
 *
 *
 *
 * 삽질풀이
 * split를 안 쓰고 직접 구분해서 풀면 개고생
 */
export const solution2 = (mathmeticaleExpression: string) => {
  // #1 '-' 인덱스를 모아주세요. '-'와 '-' 사이는 괄호로 묶을꺼에요. 빼는 값이 커지겠지요.
  // #2 '-' 가 1개만 있거나 없는 경우는 나머지 문자열을 합치고 종료시킵니다.

  // #1
  const minusIdxList: number[] = [];
  const getMinusIdxList = (mathmeticaleExpression: string, fromIdx: number) => {
    const idx = mathmeticaleExpression.indexOf('-', fromIdx);
    if (idx !== -1) {
      minusIdxList.push(idx);
      getMinusIdxList(mathmeticaleExpression, idx + 1);
    }
  };
  getMinusIdxList(mathmeticaleExpression, 0);

  // #2
  if (minusIdxList.length === 0) {
    return mathmeticaleExpression;
  }
  let R = mathmeticaleExpression.substring(0, minusIdxList[0]);
  let flag = true;
  while (flag) {
    const x = minusIdxList.shift();
    const y = minusIdxList.shift();
    if (!x && !y) {
      const a = mathmeticaleExpression.substring(mathmeticaleExpression.lastIndexOf('-'));
      R += a;
      flag = false;
    } else if (!y) {
      const a = mathmeticaleExpression.substring(x);
      R += a;
      flag = false;
    } else {
      const a = mathmeticaleExpression.substring(x + 1, y);
      R += `-(${a})`;
    }
  }

  return R;
};
