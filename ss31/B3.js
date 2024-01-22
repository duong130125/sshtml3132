function check(str, target) {
    return str.endsWith(target);
}

console.log(check("Hello world", "world")); 
console.log(check("Hello world", "orld")); 
console.log(check("Hello world", "world2")); 
