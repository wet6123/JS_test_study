let tmp = prompt("입력");
let v = [...tmp];
let ans = "";

for (let i = v.length - 1; i >= 0; i--) {
  ans += v[i];
}

console.log(ans);

// 정답

const n = prompt("입력하세요.");

const reverseString = n.split("").reverse().join("");
/*
 * split() 메서드는 문자열을 배열로 만들어 반환하고,
 * reverse() 메서드는 배열의 순서를 반전하며,
 * join() 메서드는 원소를 모두 붙여 문자열로 반환합니다.
 */
console.log(reverseString);
