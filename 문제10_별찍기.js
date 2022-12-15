// 나의 답
let height = 5;

let ans = "";

for (let i = 1; i <= height; i++) {
  let space = 5 - i;
  for (let j = 0; j < space; j++) {
    ans = ans.concat(" ");
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    ans = ans.concat("*");
  }
  ans = ans.concat("\n");
}

console.log(ans);

// 정답
const n = prompt("숫자를 입력하세요.");
let tree = "";

for (let i = 1; i <= n; i++) {
  let star = "";
  for (let j = 1; j <= n - i; j++) {
    star += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    star += "*";
  }
  tree += star + "\n";
}

console.log(tree);
