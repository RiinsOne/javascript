const log = argument => console.log(argument);

const userReviews = {};

userReviews['queenBee49'] = 4.0;
log(userReviews);
userReviews.mrSmith78 = 3.5;
log(userReviews);  // { queenBee49: 4, mrSmith78: 3.5 }

userReviews.colt = 'five';
log(userReviews);  // { queenBee49: 4, mrSmith78: 3.5, colt: 'five' }
userReviews['colt'] = 5;
log(userReviews);  // { queenBee49: 4, mrSmith78: 3.5, colt: 5 }
