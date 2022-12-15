const data = prompt("입력").split(" ");

let ans = true;

for (let i = 0; i < data.length - 1; i++) {
  if (data[i] > data[i + 1]) ans = false;
}

if (ans) console.log("YES");
else console.log("NO");
