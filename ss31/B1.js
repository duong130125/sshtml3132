function findLongestWordLength(inputString) {
    let words = inputString.split(' ');
    let longestWord = '';
    let longesLength = 0;

    for (let word of words) {
        if (word.length > longesLength) {
            longestWord = word;
            longesLength = word.length;
        }
    }
    return [longestWord, longesLength];
}
let inputString = "Defeat is simply a signal to press onward";
let result = findLongestWordLength(inputString);
console.log("Kết quả:", result);
