

/**
 * 특정 문자 제거하기
 * 
 * 문제 설명
 *  - 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 *  - 1 ≤ my_string의 길이 ≤ 100
 *  - letter은 길이가 1인 영문자입니다.
 *  - my_string과 letter은 알파벳 대소문자로 이루어져 있습니다.
 *  - 대문자와 소문자를 구분합니다.
 * 
 * @param my_string 
 * @param letter 
 * @returns 
 */
const removeChar = (my_string : string, letter : string) => [...my_string].reduce((str, char) => char === letter ? str : str + char, '');
//추가 풀이 => my_string을 split을 통해 letter 기준으로 문자열을 나눈 이후에 나눈 문자열을 Join으로 합친다. 
// my_string.split(letter).join('');



/**
 * 각도기
 * 
 * 문제 설명
 *  - 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.
 * 
 *  - 예각 : 0 < angle < 90
 *  - 직각 : angle = 90
 *  - 둔각 : 90 < angle < 180
 *  - 평각 : angle = 180
 * 
 * 제한사항
 *  - 0 < angle ≤ 180
 *  - angle은 정수입니다.
 * 
 * @param angle 
 * @returns 
 */
const getAngle = (angle : number) => 2 * Math.trunc(angle / 90) + (angle % 90 ? 1 : 0);

/**
 * 
 * 양꼬치
 * 
 * 문제 설명
 *  - 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한사항
 *  - 0 < n < 1,000
 *  - n / 10 ≤ k < 1,000
 *  - 서비스로 받은 음료수는 모두 마십니다.
 * 
 * 
 * @param n 
 * @param k 
 * @returns 
 */
const getPrice = (n : number, k : number) => n * 12000 + (k - Math.trunc(n/10)) * 2000;


/**
 * 짝수의 합
 * 
 * 문제 설명
 *  - 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
 * 
 * 제한사항
 *  - 0 < n ≤ 1000
 * 
 * 
 * 
 * @param n 
 * @returns 
 */
const addEven = (n: number) => {
    let evenTotal = 0;
    
    for(let i = 0 ; i <= n; i+=2){
        evenTotal += i;
    }
    return evenTotal;
} 