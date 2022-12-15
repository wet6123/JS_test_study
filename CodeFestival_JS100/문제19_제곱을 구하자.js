let n = prompt("입력");
let list = n.split(" ");

let ans = 1;
for (let i = 0; i < list[1]; i++) {
  ans *= list[0];
}

console.log(ans);
