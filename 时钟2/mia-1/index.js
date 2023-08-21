// 先定义好每个数字亮起的位置
// --00--
// 11--22
// --33--
// 44--55
// --66--
const numbers = [
  [1, 1, 1, 0, 1, 1, 1, ],
  [0, 0, 1, 0, 0, 1, 0, ],
  [1, 0, 1, 1, 1, 0, 1, ],
  [1, 0, 1, 1, 0, 1, 1, ],
  [0, 1, 1, 1, 0, 1, 0, ],
  [1, 1, 0, 1, 0, 1, 1, ],
  [1, 1, 0, 1, 1, 1, 1, ],
  [1, 0, 1, 0, 0, 1, 0, ],
  [1, 1, 1, 1, 1, 1, 1, ],
  [1, 1, 1, 1, 0, 1, 1, ],
];
// 获取到所有的单个数字元素顺序排好
const numbersELS = [];
document.querySelectorAll(".number").forEach((numbersELS) => {
  // 把获取的单子数字子元素按顺序存到外面数组中
  numbersELS.push(Array.from(numbersELS.children));
});
// 获取时分秒对应的数字
function getTimeNumbers() {
  const time = new Date();
  return [
    splitNumbers(time.getHours()), 
    splitNumbers(time.getMinutes()),
    splitNumbers(time.getSeconds()),
  ].flat();
}

// 拆分数字，把两位数字的时间拆成一个数组中的两个单独的数字，十位数不够时补0
// param{*} n 12
// returns [1,2]
function splitNumbers(n) {
  return [Math.floor(n / 10), n % 10];
}

// 点亮对应数字的操作

function timeFun() {
  // 1.先获取到时分秒每一位数字
  const timeNumbers = getTimeNumbers();
  // 2.第一个循环，以时分秒总共6位数 为基础
  timeNumbers.forEach((timeNumber, timeNumberIndex) =>{
    // 3.按照时分秒的数字顺序，获取到单个数字下的7个LED子元素
    const numbersEL = numbersELS[timeNumberIndex];
    // 4.第二个循环，点亮对应数字的led
    numbersEL.forEach((numbersEL, numbersELIndex) => {
      // numders[6] [-] 数字6 亮起的位置关系
      if (numbers[timeNumber] [numbersELIndex]) {
        // 符合亮起条件就添加 active 类名
        numbersEL.className = "active";
      } else {
        numbersEL.className = "";
      }
    })
  })
}
// 刚打开页面就先运行点亮
timeFun();
// 之后每隔1s都要重复执行一次 刷新时间并点亮对应的数字
setInterval(timeFun, 1000);
