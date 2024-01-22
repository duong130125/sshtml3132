// Hàm "Array.prototype.reduce" trong JavaScript được sử dụng để giảm mảng thành một giá trị duy nhất thông qua việc thực hiện một hàm callback trên từng phần tử của mảng.
// Cú pháp của Array.prototype.reduce như sau:
// array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
const array = [15, 16, 17, 18, 19];
function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}
array.reduce(reducer);
