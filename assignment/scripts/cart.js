console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
console.log(`Basket is an empty array: ${basket}.`);
function addItem(item, array){
  array.push(item);
  return true;
} //end addItem
console.log(`Adding apples, expect true, ${addItem('apples', basket)}`);
console.log(`Basket is now: ${basket}, it should say 'apples' so everything worked, right?`);
console.log(`Accidentally added some 'Coors Light' to my basket: ${addItem('Coors Light', basket)}`);
console.log(`Now it should say apples and Coors Light: ${basket}`);

function listItems(array){
  for(let x of array){
    console.log(x);

  }//end of for loop
}//end of listItems function

addItem('bubble gum', basket);
console.log(`I will be adding bubble gum to the basket, should read apples, coors, bubble gum: ${basket}`);

console.log(`Now this should list apples, Coors, and bubble gum each on their own line: ${listItems(basket)}`);

function empty(array){
  array.length = 0;
  return array;
}// originally I had set array = [], and it worked in the function, but then
//when I logged the array again it was returning the original array
//ended up on Stack Overflow and they revealed it has to be written a different way
empty(basket);
console.log(empty(basket)); //does return an empty basket...

console.log(basket);// doesnt remain empty... hmmmmm...
