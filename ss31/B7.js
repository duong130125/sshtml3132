function fakeFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
let evenNumbers = fakeFilter([5, 8, 3, 10], function(e) {
    return e % 2 === 0;
});
let oddNumbers = fakeFilter([1, 2, 3, 4], function(e) {
    return e % 2 !== 0;
});
console.log(evenNumbers); 
console.log(oddNumbers);
