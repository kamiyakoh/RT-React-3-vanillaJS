const num = 10;
//JSでは数字の入った変数に文字列が入るか？
let num2 = num;
num2 = "99";
let num3 = num + "px";
console.log(`num: ${num}`);
console.log(`num2: ${num2}`);
console.log(`num3: ${num3}`);
if (num2 === 99) {
  console.log("num2は数字です");
} else if (num2 === "99") {
  console.log("num2は文字列です");
} else {
  console.log("num2は数字でも文字列でもないです");
}
//<結論>JSでは数字の入った変数に文字列が入る

const nums = [10, 20];
const nums2 = nums;
nums2[0] = 99;
console.log(`nums: ${nums}`);
console.log(`nums2: ${nums2}`);

const nums3 = [10, 20];
nums3[0] = 100;
nums3.push(30);
console.log(`num3: ${nums3}`);

const myProfile = {
  name: "岡田",
  age: 29
};
console.log(`myProfile.name: ${myProfile.name}`);

myProfile.name += 46;
myProfile.age += "才";
console.log(myProfile);

function sayHello() {
  console.log("こんいちは！");
}
sayHello();

function calcSum(num1, num2, num3) {
  return num1 + num2 + num3;
}
const calclatedNum = calcSum(1, 3, 4);
console.log(`1+3+4: ${calclatedNum}`);
console.log(`変数の入力数不足: ${calcSum(1, 3)}`); //NaN
console.log(`文字列を混ぜる: ${calcSum(1, 3, "円")}`);

const calclatedMix = calcSum(1, "", 4);
console.log(`1+""+4: ${calclatedMix}`); //14
switch (calclatedMix) {
  case 14:
    console.log(`1+""+4は数字です`);
    break;
  case "14":
    console.log(`1+""+4は文字列です`);
    break;
  default:
    console.log(`1+""+4は数字でも文字列でもないです`);
    break;
}

try {
  // 例外に投げる
  throw new Error("例外発生");
} catch (error) {
  console.log(error.message);
}

const name = "テッくん";
const age = 40;
const sentence = name + "は" + age + "歳です";
console.log(sentence);

const sentence2 = `${name}は${age}才です`;
console.log(sentence2);

const func1 = function (name) {
  return `${name}です！`;
};
const func2 = (name) => `${name}です！`;

console.log(func1("テッくん"));
console.log(func2("岡田"));

const func3 = (name, age) => {
  return `${name}です！`;
};
console.log(func3("田中"));

const func4 = () => ({
  name: "テッくん",
  age: 40
});
console.log(func4());
console.log(`func4: ${func4()}`);
console.log(`func4: ${func4().name}, ${func4().age}`);

const num4 = 1 + 2;
console.log(`nam4: ${num4}`);
const num5 = 3 - 1;
console.log(`num5: ${num5}`);
const num6 = 3 * 4;
console.log(`num6: ${num6}`);

const division = (num1, num2) =>
  `${num1}を${num2}で割ると商は${Math.floor(num1 / num2)}余り${
    num1 % num2
  }です`;
console.log(division(14, 4));

let num7 = 10;
console.log(++num7); //11
console.log(num7++); //11
console.log(num7); //12

let num8 = 200;
console.log(--num8); //199
console.log(num8--); //199
console.log(num8); //198

const num9 = 3;
console.log(num9 > 3);
console.log(num9 >= 3);
console.log(num9 < 3);
console.log(num9 <= 3);

const trueFlag = true;
const falseFlag = false;
if (trueFlag && falseFlag) {
  console.log("&&(かつ)は実行？");
}
if (trueFlag || falseFlag) {
  console.log("||(または)は実行？");
}
trueFlag && console.log("A"); //表示
falseFlag && console.log("B"); //非表示
trueFlag || console.log("C"); //非表示
falseFlag || console.log("D"); //表示

if (!falseFlag) {
  console.log("!でfalseを反転して実行");
}

const result1 = trueFlag ? "trueです" : "falseです";
console.log(result1);
const result2 = falseFlag ? "trueです" : "falseです";
console.log(result2);

const truthy = (val) => {
  if (val) {
    console.log(`${val}はtruthyです`);
  }
};
const test = ["ABC", 0, 10, undefined, null, false, NaN, "", [], {}, "0"];
for (let i = 0; i < test.length; i++) {
  truthy(test[i]);
}

let numA = 1;
while (numA <= 3) {
  console.log(numA);
  numA++;
}
