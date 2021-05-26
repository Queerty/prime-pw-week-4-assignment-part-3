console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
console.log(`Basket is an empty array: ${basket}.`);
function addItem(item, array){
  array.push(item);
  return true;
} //end addItem
console.log(addItem(1, basket));
console.log(`Basket is now ${basket}, it should say [1] so everything worked, right?`);
console.log(addItem(4, basket));
console.log(basket);

function listItems(array){
  for(let x of array){
    console.log(x);
  }
}
listItems(basket);

function empty(array){
  return array = [];
}
console.log(empty(basket)); //does return an empty basket...

console.log(basket);// doesnt remain empty... hmmmmm...
