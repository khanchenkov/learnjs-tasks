let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const aclean = (arr) => {
    const obj = {};

    arr.forEach(item => {
        if (obj[item]) {
            obj[item] = obj[item].toLowerCase().sort();
        }
    });

    return obj;
}

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
