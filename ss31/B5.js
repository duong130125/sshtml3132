function chunkArrayInGroups(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
      result.push(arr.slice(i, i + n));
    }
    return result;
  }
  let result1 = chunkArrayInGroups(["a", "b", "c", "d"], 2);
  console.log( result1);
  let result2 = chunkArrayInGroups(["a", "b", "c", "d"], 3);
  console.log( result2); 
  