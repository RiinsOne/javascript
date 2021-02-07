const log = argument => console.log(argument);

let shoppingList = ["Cheddar Cheese", "2% Milk"];
shoppingList[1] = "Whole Milk";
log(shoppingList);  // [ 'Cheddar Cheese', 'Whole Milk' ]

shoppingList[2] = 'Ice Cream';
log(shoppingList);  // [ 'Cheddar Cheese', 'Whole Milk', 'Ice Cream' ]

shoppingList[shoppingList.length] = 'Tomatoes';  // Добавляет значение в конец массива
log(shoppingList);  // [ 'Cheddar Cheese', 'Whole Milk', 'Ice Cream', 'Tomatoes' ]

shoppingList[shoppingList.length] = 'Potatoes';
log(shoppingList);  // [ 'Cheddar Cheese', 'Whole Milk', 'Ice Cream', 'Tomatoes', 'Potatoes' ]
