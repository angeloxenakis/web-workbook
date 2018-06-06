function testhundred(x) {
  return ((Math.abs(100 - x) <= 20) ||
	 (Math.abs(400 - x) <= 20));
}

console.log(testhundred(50));
console.log(testhundred(90));
console.log(testhundred(99));
console.log(testhundred(400));
console.log(testhundred(200));
