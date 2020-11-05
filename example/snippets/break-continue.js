'use strict';

/* break


*/


const max = 6;

let iterations = 0;
while (true) {

  console.log('begin loop');

  iterations = iterations + 1;

  if (iterations >= max) {
    console.log('break loop');
    break;
  }

  console.log(iterations);

  console.log('end loop');

}