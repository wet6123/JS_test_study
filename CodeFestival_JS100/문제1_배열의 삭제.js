//나의 정답

var nums = [100, 200, 300, 400, 500];

let ans = [];
nums.forEach(function (item) {
  if (item !== 400 && item !== 500) {
    ans.push(item);
  }
});
nums = ans;

nums;

//
//
//splice는 주의
// 왜 splice를 이렇게 쓰는건 안되나?
// splice 한번 하는 순간 nums의 idx가 바뀌기 때문
// 따라서 아래 코드 불가능

var nums = [100, 200, 300, 400, 500];

nums.forEach(function (item, idx) {
  if (item === 400 || item === 500) {
    item.splice(idx, 1);
  }
});

//
//
// 정답
// pop하면 뒤에꺼부터 삭제된다.

var nums = [100, 200, 300, 400, 500];

nums.pop();
nums.pop();

console.log(nums);
