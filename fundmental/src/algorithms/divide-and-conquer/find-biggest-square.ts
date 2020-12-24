/**
 * 너는 농부다.
 * 가로 1680m 세로 640m 의 농장을 가지고 있다.
 * 이 농장을 빈 공간 없이 가장 큰 정사격형 모양으로 나눠야한다.
 * 1) 정사각형은 최대 크기가 되야한다.
 *  예를들어 가로세로 1M 정사각형으로 나누면 안 된다는거다.
 * 2) 모든 정사각형은 크기가 같아야 한다.
 * 정사각형의 크기를 구해봐라. 정답은 80m 짜리 정사각형이다
 * 재귀함수로 만들어라
 */
type Ifarm = {
  width: number;
  height: number;
};
type ISolution = ((a: Ifarm) => ISolution) | Ifarm;

export const solution = (farm: Ifarm): ISolution => {
  const { width, height } = farm;

  if (width === 0) {
    return { width: height, height };
  } else if (height === 0) {
    return { width, height: width };
  }

  let smallWidth = 0;
  let smallHeight = 0;
  if (width > height) {
    smallWidth = width % height;
    smallHeight = height;
  } else {
    smallWidth = height % width;
    smallHeight = width;
  }

  return solution({ width: smallWidth, height: smallHeight });
};

const farm = { width: 1680, height: 640 };
console.log(solution(farm));

/** 유클리드 호제법 https://ilc12345-080.tistory.com/m/32
임의의 두 자연수 a, b가 주어졌을때. 둘중 큰 값이 a라고 가정해보겠습니다.
[#1] a를 b로 나눈 나머지를 n 이라고 하면 (a%b = n)
[#2] n이 0일때, b가 최대 공약수(GCD)입니다.
[#3] 만약 n이 0이 아니라면, a에 b값을 다시 넣고 n를 b에 대입 한 후 다시 위에 step2부터 반복하면 됩니다.
 */
