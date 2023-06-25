
/* 간단한 몸풀기 */

/**
 * 두 수의 합
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns 
 */
function solution(num1, num2) {
    const answer = num1 + num2;
    return answer;
}

/**
 * 두 수의 차
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns 
 */
function solution(num1, num2) {
    const answer = num1 - num2;
    return answer;
}


/**
 * 두 수의 곱
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns 
 */
function solution(num1, num2) {
    const answer = num1 * num2;
    return answer;
}


/**
 * 몫 구하기
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns 
 */
function solution(num1, num2) {
    const answer = Math.trunc(num1 / num2); // trunc : 주어진 값의 소수점을 제거하고 숫자의 정수 부
    return answer;
}
