


/**
 * 
 * 배열 자르기
 * 
 * 문제 설명
 *  - 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한사항
 *  - 2 ≤ numbers의 길이 ≤ 30
 *  - 0 ≤ numbers의 원소 ≤ 1,000
 *  - 0 ≤num1 < num2 < numbers의 길이
 * 
 * 
 * @param numbers 
 * @param num1 
 * @param num2 
 */
const cutArray = (numbers : number[], num1 : number, num2 :number) => numbers.slice(num1,  num2 + 1);


const CODE  = ['a','b','c','d','e','f','g','h','i','j'];

/**
 * 
 * 외계행성의 나이
 * 
 * 문제 설명
 *  - 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 *  - age는 자연수입니다.
 *  - age ≤ 1,000
 *  - PROGRAMMERS-962 행성은 알파벳 소문자만 사용합니다.
 * 
 * 
 * @param age 
 * @returns 
 */
const getAlienAge = (age: number) => [...String(age)].reduce((str, char) => str += CODE[Number(char)],'');



/**
 * 
 * 진료 순서 정하기
 * 
 * 문제 설명
 *  - 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 *  - 중복된 원소는 없습니다.
 *  - 1 ≤ emergency의 길이 ≤ 10
 *  - 1 ≤ emergency의 원소 ≤ 100
 * 
 * 
 * @param emergency 
 * @returns 
 */
const getOrderOfTreatment = (emergency: number[]) => {
    const emergencyMap = emergency.reduce((map, num) => {
        map.set(num, 0);
        return map;
    }, new Map())
    
    emergency.sort((a,b) => b - a).forEach((num,idx) => {emergencyMap.set(num,idx+1)});
                                         
    return Array.from(emergencyMap.values());
}

/**
 * 
 * 순서쌍의 개수
 * 
 * 문제 설명
 *  - 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 *  - 1 ≤ n ≤ 1,000,000
 * 
 * 
 * @param n 
 * @returns 
 */
const getOrderedPair = (n :number) => {
    //추가 풀이 => Array(n)을 활용하면, for문 없이 구현 할 수 있다.
    let count = 0;
    for(let i = 1 ; i <= n ; i++){
       if(n%i === 0) count++;
    }
    return count;
}