let n = prompt("입력");
let list = n.split(" ");

let ans1 = list[0] / list[1];
let ans2 = list[0] % list[1];

console.log("출력 : " + ans1 + " " + ans2);

// 정답

// /를 써서 몫을 구할 때 정수가 나오지 않는 것에 주의

const n = prompt("수를 입력하세요.").split(" ");

const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
const left = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(result, left);
