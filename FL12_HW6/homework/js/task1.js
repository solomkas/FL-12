let a = prompt('Enter A');
let b = prompt('Enter B');
let c = prompt('Enter C');
if (a === '' || b === '' || c === '' || a === null || b === null || c === null) {
    console.log('Invalid input data');
} else {
    let D = b * b - 4 * a * c;
    if ( D === 0 ) {
        let x = b * -1 / 2 * a;
        console.log(`x = ${x}`);
    } else if ( D > 0) {
        let x1 = b * -1 + Math.sqrt(D) / 2 * a;
        let x2 = b * -1 - Math.sqrt(D) / 2 * a;
        console.log(`x1 = ${x1} & x2 = ${x2}`);
    } else {
            console.log('No solution');
        }
}