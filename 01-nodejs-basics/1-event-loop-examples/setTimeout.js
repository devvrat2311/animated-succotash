console.log('first');
const second = () => {
  console.log('second');
};
setTimeout(second, 0);
console.log('third');