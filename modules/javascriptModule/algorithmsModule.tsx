/**
 * посчитать количество букв в строке
 */
export const AlgoExampleOne = () => {
    const stringSample = 'aaabbbcccdddffffeeee';

    const countChars = (sample: string): Record<string, number> => {
        const result = sample.split('').reduce((acc, current) => {
            acc[current] = acc[current]++ || 1;
            return acc;
        }, {})

        return result;
    }

    countChars(stringSample);
}

/**
 * допустим с сервера всегда приходит ответ в виде буквы и цифры
 * например a1b2d3, c8d9g2c8
 * буква может быть любой, цифра от 0 до 9 нужно разделить их на части, где
 * 1буква + 1цифра
 * к примеру для a1b2d3 ответ будет ['a1','b2','d3']
 */
export const AlgoExampleTwo = () => {

    const sampleString = 'a1b2d3c4';

    const splitResponseByTwo = (sample: string): [] => {
        const result = [];
        for (let i = 0; i < sample.length; i += 2) {
            result.push(sample[i].concat(sample[i+1]));
        }
        return result;
    }

    return (
        <pre>{splitResponseByTwo(sampleString)}</pre>
    )
}