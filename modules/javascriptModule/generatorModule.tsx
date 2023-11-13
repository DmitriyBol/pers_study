/**
 *
 */
function* generatorOne() {
    yield '1';
    yield '2';
    yield '3';
    return '4';
}

export function generatorExampleOne() {
    const gen = generatorOne();
    return [...gen] as string;
}