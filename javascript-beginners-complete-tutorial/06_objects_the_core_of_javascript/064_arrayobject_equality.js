const log = argument => console.log(argument);

let nums = [1, 2, 3];
let mystery = [1, 2, 3];
log(nums === mystery);  // false

let moreNums = nums;
log(nums === moreNums);  // true
// moreNums и nums имеют одинаковый линк на массив

log([] === []);  // false

const user = {
    note: []
};

if (!user.note.length) {
    console.log('No new notes!');
};
