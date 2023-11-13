/**
 * q: отличия стрелочной функции от обычной
 * a: ряд отличий:
 * 1) У стрелочной нет собственного контекста (this), она работает с областью выше
 * 2) Обычную функцию можно создавать с помощью new function, и использовать в качестве конструктора
 * 3) синтаксис
 *
 * example:
 */
export const functionArrowExample = () => {
    const x = 20;
    return {
        x: 10,
        foo: () => console.log(this.x),
        bar: function func() {console.log(this.x)},
    }
}

export function functionExampleOne() {
    const x = 20;
    return {
        x: 10,
        foo: () => console.log(this.x),
        bar: function func() {console.log(this.x)},
    }
}

