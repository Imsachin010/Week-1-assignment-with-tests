/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var spendestimates = {}; //empty object

  for (var i= 0; i< transactions.length; i++) {
    var t = transactions[i];
    if (spendestimates[t.category]) {
      spendestimates[t.category] = spendestimates[t.category] + t.price;
    } else {
      spendestimates[t.category] = 0;
      spendestimates[t.category] = t.price;
    }
  }
  var keys = Object.keys(spendestimates)
  console.log(keys);
  console.log(spendestimates);

  let answers = [];
  for (var i = 0; i< keys.length; i++){
    var category = keys[i];
    var obj = {
      category: category,
    amountspend: spendestimates[category]
      
    }
    answers.push(obj)
  }
return answers;
}


module.exports = calculateTotalSpentByCategory;
