let n = prompt("입력");
let list = n.split(" ");
let ans = 0;

for (let i = 0; i < 3; i++) {
  ans += parseInt(list[i], 10);
}

console.log("출력 : " + ans / 3);
