
// rule 1.a
//  outer variables are available inside if they have not been 'replaced'

const tree = 'oak';
{ // begin block
  console.assert(tree === 'oak', 'inside the block: tree should be "oak"');
} // end block


// rules 1.b & 2.c
//  a variable declared in a block will 'replace' an outer variable with the same name

const water = 'salty';
{
  const water = 'fresh';
  console.assert(water === 'fresh', 'inside the block: water should be "fresh"');
}


// rules 2.a & 2.b

{
  const animal = 'badger';
  console.assert(animal === 'badger', 'inside the block: animal should be "badger"');
}
animal; // ReferenceError: animal is not defined
