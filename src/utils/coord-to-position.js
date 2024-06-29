export const coodToPostion = (x, y, x0, x1, y0, y1, isString = true) => {
    const xReal = (x - x0) * 100 / (x1 - x0);
    const yReal = (y1 - y) * 100 / (y1 - y0);
    if (isString) {
        return {
            x: `${xReal}%`,
            y: `${yReal}%`,
        }
    }

    return {
        x: xReal,
        y: yReal,
    }
}