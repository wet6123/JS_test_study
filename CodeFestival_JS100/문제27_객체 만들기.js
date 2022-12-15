const name = prompt("입력").split(" ");
const score = prompt("입력").split(" ");
const obj = {};

for (let i = 0; i < name.length; i++) {
  obj[name[i]] = parseInt(values[i], 10);
}

console.log(obj);
