function truncate(str, n) {
    if (str.length > n) {
        return str.slice(0, n) + "...";
    } else {
        return str;
    }
}
let result = truncate("Hello world, I’m Duong", 11);
console.log(result); 
