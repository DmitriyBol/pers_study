/**
 * Event loop - замкнутая цепь выполенения задач, при выполнении всех - ждет следующих.
 * Стек работает по принципу - первый пришел - последний ушел
 *
 * Приоритет - синхронные таски, микротаски, макротаски
 */
export const eventsExampleOne = () => {
    // 1 3 5 2 4
    /**
     * 1 - синхронная операция
     * 3 - результат промиса
     * 5 - синхронная операция
     * 2 и 4 - отложенный вызов
     */
    console.log(1);
    setTimeout(() => console.log(2), 0);
    new Promise(resolve => {
        console.log(3);
        resolve();
    });
    setTimeout(() => console.log(4), 0);
    console.log(5);
}

export const eventsExampleTwo = () => {
    // 2 4 3 1
    /**
     * 2 - сначала выполнится резолв промиса
     * 4 - синхронная, так как она не в таймауте и никак не отложено
     * 3 - микро таска
     * 1 - отложенный вызов
     */
    setTimeout(() => console.log(1), 0);
    let p = new Promise(resolve => {
        console.log(2);
        resolve();
    })
    p.then(() => console.log(3));
    console.log(4);
}

export const summaryExample = (a?: number, b?: number): number => {
    return a + b;
}