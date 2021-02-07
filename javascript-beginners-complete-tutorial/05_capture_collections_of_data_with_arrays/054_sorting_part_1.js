const log = argument => console.log(argument);

let people = ['Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];
log(people.sort());  // [ 'Angie', 'Jolene', 'Maggie May', 'Mrs. Robinson', 'Roxanne' ]
log(people);  // [ 'Angie', 'Jolene', 'Maggie May', 'Mrs. Robinson', 'Roxanne' ] - массив также изменится, по аналогии с reverse

let nums = [34, 10, 10000, 67, 99];
log(nums.sort());  // [ 10, 10000, 34, 67, 99 ]
