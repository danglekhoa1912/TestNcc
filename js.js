const findNumberBoth = (a, b) => {
   return a.filter((item) => b.includes(item));
};

const a = [1, 2, 3, 4, 5, 6];
const b = [1, 9, 3, 4, 8, 7];

console.log(findNumberBoth(a, b));
