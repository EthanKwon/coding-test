/* 간단한 몸풀기 - 사칙연산, 조건문, 배열 */

/**
 * 두 수의 나눗셈
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns 
 */
const divideNum = (num1, num2) => Math.floor((num1 / num2) * 1000);


/**
 * 숫자 비교하기
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns 
 */
const compareNum = (num1, num2) => num1 === num2 ? 1 : -1;


/**
 * 분수의 덧셈
 * 
 * @param {number} numer1 
 * @param {number} denom1 
 * @param {number} numer2 
 * @param {number} denom2 
 * @returns 
 */
const addfountain = (numer1, denom1, numer2, denom2) => {
    // 최대 공약수 구하는 공식
    function findGCD(a, b) {
        while (b !== 0) {
          const remainder = a % b;
          a = b;
          b = remainder;
        }
        return a;
      }
          
    const numer = numer1 * denom2 + denom1 * numer2;
    const denom = denom1 * denom2;
    
    //분자,분모의 최대공약수로 나누어 준다.
    const gcd = findGCD(numer, denom)
    
    return [numer/ gcd, denom /gcd];
} 

/**
 * 배열 두 배 만들기
 * 
 * @param {Array<number>} numbers 
 * @returns 
 */
const doubleNumbers = (numbers) => {
    return numbers.map((num) => num *2);
}