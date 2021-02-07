const log = argument => console.log(argument);

const student = {
    firstName: 'David',
    lastName: 'Jones',
    strengths: ['Music', 'Art'],
    exams: {
        midterm: 92,
        final: 88
    }
};

log(student['exams']['final']);  // 88

const avg = (student.exams.midterm + student.exams.final) / 2;
log(avg);  // 90
log(student.strengths[1]);  // Art

log('-----');

const shoppingCart = [
    {
        product: 'Jenga Classic',
        price: 6.88,
        quantity: 1
    },
    {
        product: 'Echo Dot',
        price: 29.99,
        quantity: 3
    }
];

log(shoppingCart[1].product);
