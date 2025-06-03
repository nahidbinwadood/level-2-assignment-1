"use strict";
{
    // Problem:01:==>
    function formatString(input, toUpper = true) {
        return toUpper ? input.toUpperCase() : input.toLowerCase();
    }
    // Problem:02:==>
    function filterByRating(items) {
        return items === null || items === void 0 ? void 0 : items.filter((i) => i.rating >= 4);
    }
    // Problem:03:==>
    function concatenateArrays(...arrays) {
        return arrays.reduce((acc, curr) => acc.concat(curr), []);
    }
    const result1 = concatenateArrays(['a', 'b'], ['c']); // Type: string[]
    const result2 = concatenateArrays([1, 2], [3, 4], [5]); // Type: number[]
    console.log(concatenateArrays(result1));
}
