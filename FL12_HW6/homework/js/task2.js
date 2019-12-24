let a = prompt('Enter value a:');
let b = prompt('Enter value b:');
let c = prompt('Enter value c:');
let checkInputValues = isNaN(+a) || a === '' || isNaN(+b) || b === '' || isNaN(+c) || c === '';
if (checkInputValues) {
    alert('input values should be ONLY numbers')
} else if (a === '0' || b === '0' || c === '0') {
    alert('A triangle must have 3 sides with a positive definite length')
 } else {
                if (a === b || b === c || c === a) {
                    if (a === b && b === c) {
                        console.log('Equilateral');
                    } else {
                        console.log('Isosceles');
                    }
                } else {
                    console.log('Scalene');
                }
            }