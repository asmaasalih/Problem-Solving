function sym(args) {
  function getDiff(arr1, arr2) {
    const diff1 = [arr1].filter(item => !item  in arr2);
    const diff2 = [arr2].filter(item => !item in arr1);
    return diff1.concat(diff2);
  }

  // Compute symmetric difference step-by-step
  let result = args[0];
  for (let i = 1; i < args.length; i++) {
    result = getDiff(result, args[i]);
  }

  // Remove duplicates from the final result
  return [...new Set(result)];
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));