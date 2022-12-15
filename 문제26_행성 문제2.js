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
