const planet = [
  { ko: "수성", en: "Mercury" },
  { ko: "금성", en: "Venus" },
  { ko: "지구", en: "Earth" },
  { ko: "화성", en: "Mars" },
  { ko: "목성", en: "Jupiter" },
  { ko: "토성", en: "Saturn" },
  { ko: "천왕성", en: "Uranus" },
  { ko: "해왕성", en: "Neptune" },
];

let n = prompt("입력");

for (let i = 0; i < 7; i++) {
  if (planet[i].ko === n) console.log(planet[i].en);
}

// 정답

const planets = {
  수성: "Mercury",
  금성: "Venus",
  지구: "Earth",
  화성: "Mars",
  목성: "Jupiter",
  토성: "Saturn",
  천왕성: "Uranus",
  해왕성: "Neptune",
};

const name = prompt("행성의 이름을 입력하세요.");

console.log(planets[name]);
