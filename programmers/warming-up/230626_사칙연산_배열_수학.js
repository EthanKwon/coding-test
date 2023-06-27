/**
 * 나머지 구하기
 *
 * @param {number} num1
 * @param {number} num2
 * @returns
 */
export const getReminder = (num1, num2) => num1 % num2;

/**
 * 중앙값 구하기
 *
 * @param {Array<number>} array
 * @returns
 */
export const getMediun = (array) =>
  array.sort((a, b) => a - b)[Math.trunc(array.length / 2)];

/**
 * 최빈값 구하기
 *
 * @param {Array<number>} array
 * @returns
 */
export const getMode = (array) => {
  //Num의 개수 세기
  const numMap = array.reduce((map, num) => {
    const count = map.get(num) ?? 0;
    map.set(num, count + 1);
    return map;
  }, new Map());

  // => 추가 풀이 : Map을 배열로 바꿔서 Num의 개수를 내림차순하여 가장 큰 두 값을 비교하여 최빈값을 구하는 방법도 있음

  // count의 최대값 구하기
  const max = Array.from(numMap.keys()).reduce(
    (max, num) => {
      const count = numMap.get(num);
      return count === max[1]
        ? [max[0], max[1], true]
        : count > max[1]
        ? [num, count, false]
        : max;
    },
    [0, 0, false]
  ); // [num, count, 중복 여부]

  //중복이 있으면 -1, 없으면 최빈값
  return max[2] ? -1 : max[0];
};

/**
 * 짝수는 싫어요
 *
 * @param {number} n
 * @returns
 */
export const getOdd = (n) => {
  const array = [];
  // => 추가 풀이 : for문을 돌릴 때는 반드시 +1씩 하라는 법은 없다!
  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) array.push(i);
  }
  return array;
};
