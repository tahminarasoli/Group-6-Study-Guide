
let food = 'broccoli';
console.assert(food === 'broccoli', 'outside the block 1: food should be "broccoli"');
{
  food = 'spinach';
  console.assert(food === 'spinach', 'inside the block: food should be "spinach"');
}
console.assert(food === 'spinach', 'outside the block 2: food should be "spinach"')


// rule 3.b: can not modify replaced outer variables from inside the block
//  this applies for replacing with `let` or `const`
let cloud = 'fluffy';
let dirt = 'tasty';
console.log(cloud, dirt);
{
  let cloud = 'rainy';
  const dirt = 'muddy';
  console.log(cloud, dirt);
}
console.log(cloud, dirt);
