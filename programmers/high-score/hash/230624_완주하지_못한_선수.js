/**
 * 완주하지 못한 선수 (https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript)
 *
 * 문제 설명
 * 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
 * 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
 *
 * 제한사항
 *  - 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
 *  - completion의 길이는 participant의 길이보다 1 작습니다.
 *  - 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
 *  - 참가자 중에는 동명이인이 있을 수 있습니다.
 *
 * @param {Array[string]} participant
 * @param {Array[string]} completion
 * @returns
 */
function findStragger(participant, completion) {
  if (completion.length === 0) return participant[0];

  //참가자 Map 만들기 : [이름,명수]
  const participantMap = participant.reduce((map, person) => {
    const count = map.get(person) ?? 0;
    map.set(person, count + 1);
    return map;
  }, new Map());

  //완주자 Map 만들기 : [이름,명수]
  const completionMap = completion.reduce((map, person) => {
    const count = map.get(person) ?? 0;
    map.set(person, count + 1);
    return map;
  }, new Map());

  //완주자와 참가자의 명수 비교하기 : 명수가 다른 경우가 낙오자가 있는 경우
  const straggler = participant.find((person) => {
    if (!completionMap.get(person)) return true;
    else return participantMap.get(person) !== completionMap.get(person);
  });

  return straggler;
}

//[Test] findStragger
findStragger(["leo", "kiki", "eden"], ["eden", "kiki"]);
