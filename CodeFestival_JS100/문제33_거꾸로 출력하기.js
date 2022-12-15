const data = prompt("입력").split(" ");

const rev = data.reverse();

let line = "";
for (let element of rev) {
  line += " " + element;
}

console.log(line);
