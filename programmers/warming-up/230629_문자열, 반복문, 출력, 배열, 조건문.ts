
/**
 * 
 * 문자열 뒤집기
 * 
 * 문제 설명
 *  - 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 *  - 1 ≤ my_string의 길이 ≤ 1,000
 * 
 * @param my_string 
 * @returns 
 */
const reverseString = (my_string : string) => my_string.split("").reverse().join(); //추가 풀이 : [...my_string]으로 문자 배열을 만들 수 있다.



/**
 * 
 * 
 * 
 * 
 * 직각삼각형 출력하기 => 주석 남기기도 쉽지 않네...
 * 
 * 문제 설명
 * '\*' 의 높이와 너비를 1이라고 했을 때, '*'을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.
 * 
 * 제한사항
 * 1 ≤ n ≤ 10
 * 
 * 
 * 
 * const readline = require('readline');
 * const rl = readline.createInterface({
 *     input: process.stdin,
 *     output: process.stdout
 * });
 * 
 * let input = [];
 * 
 * rl.on('line', function (line) {
 *     input = line.split(' ');
 * }).on('close', function () {
 *     for(let i = 1 ; i <= Number(input[0]); i++){
 *         console.log('*'.repeat(i));
 *     }
 * });
 */


/**
 * 짝수 홀수 개수
 * 
 * 문제 설명
 *  - 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한사항
 *  - 1 ≤ num_list의 길이 ≤ 100
 *  - 0 ≤ num_list의 원소 ≤ 1,000
 * 
 * @param num_list 
 * @returns 
 */
const getCountOddEven = (num_list : number[]) => num_list.reduce((arr, number) => number%2 === 0 ? [arr[0]+ 1, arr[1]] :[arr[0], arr[1] + 1] ,[0,0]);
// 추가 풀이 : 배열의 순서 자체를 짝수, 홀수 판별해서 바로 넣는 방법도 있다 => num_list.reduce((arr, number) => { arr[number%2]++; return arr; }  ,[0,0]);


/**
 * 문자 반복 출력하기
 * 
 * 문제 설명
 *  - 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한사항
 *  - 2 ≤ my_string 길이 ≤ 5
 *  - 2 ≤ n ≤ 10
 *  - "my_string"은 영어 대소문자로 이루어져 있습니다.
 * 
 * 
 * @param my_string 
 * @param n 
 * @returns 
 */
const getRepeatString = (my_string: string, n :number) => [...my_string].reduce((str, char) => str += char.repeat(n),'');