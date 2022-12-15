const data = prompt("입력");

let ans = "";
let num = 1;

for (let i = 1; i < 9; i++) {
  ans += `${num++ * data} `;
}
console.log(ans);
