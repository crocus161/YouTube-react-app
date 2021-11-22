
const numbersFormat = num => {
    let flag = 0;
    while (num > 1000) {
        num /= 1000;
        flag++;
    }
    return num ? +num.toFixed(1) + (["", "k", "m", "b", "t"][flag] || "") : 0;
}

export default numbersFormat;
