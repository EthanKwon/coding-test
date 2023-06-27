"use strict";
exports.__esModule = true;
exports.getCombinationByClothes = void 0;
var getCombinationByClothes = function (clothes) {
  //옷 종류별 갯수를 분류한다.
  var clothesClassMap = clothes.reduce(function (map, item) {
    var _a;
    var count = (_a = map.get(item[1])) !== null && _a !== void 0 ? _a : 0;
    map.set(item[1], count + 1);
    return map;
  }, new Map());
  // 종류별 개수에 + 1을 한 것을 다 곱하고 마지막에 1을 뺀 값이 조합의 수 이다.
  return (
    Array.from(clothesClassMap.values()).reduce(function (calc, num) {
      return calc * (num + 1);
    }, 1) - 1
  );
};
exports.getCombinationByClothes = getCombinationByClothes;
//Test
var test = (0, exports.getCombinationByClothes)([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
console.log("결과 : ", test);
