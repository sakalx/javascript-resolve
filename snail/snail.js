array = [
    [1,2,3],
    [8,9,4],
    [7,6,5]
];


function snail(arr) {
    const res = [];
    res.push(...arr.shift());

    (function spliceArr() {
        arr.forEach((subAr, i) => {
            (i !== arr.length - 1)
                ? res.push(subAr.pop())
                : res.push(...arr.pop().reverse())
        });
        arr.reverse();
        arr.forEach(subAr => subAr.reverse());

        arr.length !== 0 && spliceArr();
    })();
    return res;
}

console.log(snail(array)); // [1,2,3,4,5,6,7,8,9]
