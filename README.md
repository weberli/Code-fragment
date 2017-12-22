# [30 seconds of code](https://github.com/Chalarangelo/30-seconds-of-code#30-seconds-of-code--) 学习笔记

### Array
----
计算一个数组的最大公约数
利用 [`Array.reduce()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce_clone)[ESMAScript 5] 和 `gcd` 算法计算数组里面的最大公约数

```
const arrayGcd = arr =>{
  const gcd = (x, y) => !y ? x : gcd(y, x % y);
  return arr.reduce((a,b) => gcd(a,b));
}
// arrayGcd([1,2,3,4,5]) -> 1
// arrayGcd([4,8,12]) -> 4
```