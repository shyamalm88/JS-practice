const flattenArray = (arr) => {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flattenArray(item));
    } else {
      acc = [...acc, item];
    }
    return acc;
  }, []);
};

console.log(flattenArray([1, 2, [3, 4, 5, [6, 7, [8, 9, 10, [89, 56]]]]]));
