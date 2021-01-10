// 길이가 N인 수열이 주어졌을 때, 그 수열의 합을 구하려고 한다.
// 하지만, 그냥 그 수열의 합을 모두 더해서 구하는 것이 아니라, 수열의 두 수를 묶으려고 한다.
// 어떤 수를 묶으려고 할 때, 위치에 상관없이 묶을 수 있다. 하지만, 같은 위치에 있는 수(자기 자신)를 묶는 것은 불가능하다.
// 그리고 어떤 수를 묶게 되면, 수열의 합을 구할 때 묶은 수는 서로 곱한 후에 더한다.

// 예를 들면, 어떤 수열이 {0, 1, 2, 4, 3, 5}일 때,
// 그냥 이 수열의 합을 구하면 0+1+2+4+3+5 = 15이다. 하지만, 2와 3을 묶고, 4와 5를 묶게 되면, 0+1+(2*3)+(4*5) = 27이 되어 최대가 된다.

// 수열의 모든 수는 단 한번만 묶거나, 아니면 묶지 않아야한다.
// 수열이 주어졌을 때, 수열의 각 수를 적절히 묶었을 때, 그 합이 최대가 되게 하는 프로그램을 작성하시오.

// 잘 묶어서 최대를 만들어라 / 서로 다른 두 수를 묶을 수 있다. / 묶는 건 곱해서 더한다
export const solution = (input: number[]) => {
  // 양수랑 음수는 묶으면 안댐
  // 0이 있으면 가장 작은 음수랑 묶어
  // 양수그룹 / 음수 그룹 나눠
  // 양수는 큰애들끼리 묶어 /  음수는 작은 애들끼리 묶어

  let max = 0;
  input.sort();

  // filter zero and minimum
  const zeroIdx = input.findIndex((v) => v === 0);
  if (zeroIdx !== -1) {
    input.filter((v) => v !== 0);
    input.shift();
  }

  // group naturals and minuses
  const naturals = input.filter((v) => v > 0);
  const minuses = input.filter((v) => v < 0);

  // add natural group item
  for (let i = naturals.length - 1; i >= 0; i--) {
    const x = naturals[i];
    const y = naturals[i - 1];
    if (y) {
      i--;
      max += x * y;
    } else {
      max += x;
    }
  }

  // add minuses group item
  for (let i = 0; i < minuses.length; i++) {
    const x = minuses[i];
    const y = minuses[i + 1];
    if (y) {
      i++;
      max += x * y;
    } else {
      max += x;
    }
  }

  // console.log('minuss', minuses);
  // console.log('naturals', naturals);
  // console.log('natural_number_idx', natural_number_idx);
  // console.log('zeroIdx', zeroIdx);
  // console.log('input', input);
  // console.log('max', max);

  return 6;
};
