const check = function (n) {
  if (n % 3 == 0) {
    return "짝";
  } else {
    return n;
  }
};

const n = prompt("입력 : ");

console.log(check(n));
