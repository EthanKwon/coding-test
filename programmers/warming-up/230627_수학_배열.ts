/**
 * 피자 나눠 먹기 1
 *
 * @param n
 * @returns
 */
const dividePizza1 = (n: number) => {
  // => 추가 풀이 : 올림 처리를 하면 남은 조각도 피자 1판으로 계산 할 수 있다.
  const pizzaInAll = Math.trunc(n / 7);
  return n % 7 ? pizzaInAll + 1 : pizzaInAll;
};

/**
 * 피자 나눠 먹기 2
 *
 * @param n
 * @returns
 */
const dividePizza2 = (n: number) => {
  let pizza = 1;
  while ((6 * pizza) % n !== 0) {
    pizza++;
  }
  return pizza;
};

/**
 * 피자 나눠 먹기 3 => '피자 나눠 먹기 1'에서 변수 하나 더 생긴 문제...
 *
 * @param slice
 * @param n
 * @returns
 */
const dividePizza3 = (slice: number, n: number) => Math.ceil(n / slice);

/**
 * 배열의 평균값
 *
 * @param numbers
 * @returns
 */
const getAverage = (numbers: number[]) =>
  numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
