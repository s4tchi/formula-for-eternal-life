export const functionResult = (func, start, end, e) => {
    const result = []
    for (let i = start; i <= end; i += e) {
        let x = 1;
        let res = 0;

        func.forEach(el => {
            res += x * el;
            x *= i;
        })

        result.push({ x: i, y: res });
    }
    return result;
}