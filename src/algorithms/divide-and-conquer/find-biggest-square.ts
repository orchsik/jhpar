/**
 * 너는 농부다.
 * 가로 1680m 세로 640m 의 농장을 가지고 있다.
 * 이 농장을 빈 공간 없이 가장 큰 정사격형 모양으로 나눠야한다.
 * 1) 정사각형은 최대 크기가 되야한다.
 *  예를들어 가로세로 1M 정사각형으로 나누면 안 된다는거다.
 * 2) 모든 정사각형은 크기가 같아야 한다.
 * 정사각형의 크기를 구해봐라. 정답은 80m 짜리 정사각형이다
 */
type Ifarm = {
  width: number;
  height: number;
};
type ISolution = ((a: Ifarm) => ISolution) | Ifarm;

const solution = (farm: Ifarm): ISolution => {
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
