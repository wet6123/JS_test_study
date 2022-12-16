let n = prompt("입력");
let list = n.split(" ");

let ans = 1;
for (let i = 0; i < list[1]; i++) {
  ans *= list[0];
}

console.log(ans);

// 정답

const n = prompt("수를 입력하세요.").split(" ");

console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));
