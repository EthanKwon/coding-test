

/**
 * 옷가게 할인 받기
 * 
 * 문제 설명
 * 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
 * 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한사항
 *  - 10 ≤ price ≤ 1,000,000
 *  - price는 10원 단위로(1의 자리가 0) 주어집니다.
 *  - 소수점 이하를 버린 정수를 return합니다.
 * 
 * @param price 
 * @returns 
 */
const discountPrice = (price : number) => {
    // 추가 설명 => 각 조건을 연결하지 말고 각각 처리하도록 하면 가독성이 좋아진다.
    //         => ~~(double tilde)를 사용하면 Math.floor의 효과를 낼 수 있다.

   return Math.floor(price >=500000 ? price * 0.8 
        : price >=300000 ? price * 0.9 
        : price >=100000 ? price * 0.95 : price);
}

/**
 * 아이스 아메리카노
 * 
 * 문제 설명
 * 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한사항
 *  - 0 < money ≤ 1,000,000
 * 
 * 
 * 
 * @param money 
 * @returns 
 */
const calcIceAmeAndChange = (money : number) => [Math.trunc(money/5500), money%5500];



/**
 * 
 * 나이 출력
 * 
 * 문제 설명
 * 머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 나이 age가 주어질 때, 올해를 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.
 * 
 * 제한사항
 *  - 0 < age ≤ 120
 *  - 나이는 태어난 연도에 1살이며 1년마다 1씩 증가합니다.
 * 
 * @param age 
 * @returns 
 */
const getYearOfBirth = (age : number) => new Date().getFullYear() - age + 1;

/**
 * 배열 뒤집기
 * 
 * 문제 설명
 * 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 *  - 1 ≤ num_list의 길이 ≤ 1,000
 *  - 0 ≤ num_list의 원소 ≤ 1,000
 * 
 * @param num_list 
 * @returns 
 */
const reverseArray = (num_list: number[]) => [...num_list.reverse()]