// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  // throw new Error('Please implement the timeToMixJuice function');
  switch(name){
    case 'Pure Strawberry Joy': return 0.5;
    case 'Green Garden':
    case 'Energizer': return 1.5;
    case 'Tropical Island': return 3;
    case 'All or Nothing': return 5;
  }
  return 2.5;
}

let sliceCount={
  small:6,
  medium:8,
  large:10
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  // throw new Error('Please implement the limesToCut function');
  let remaining=wedgesNeeded;
  let i=0;
  while(remaining>0&&i<limes.length){
    remaining-=sliceCount[limes[i]];
    i++;
  }
  return i;
}


/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  // throw new Error('Please implement the remainingOrders function');
  while(timeLeft>0){
    timeLeft-=timeToMixJuice(orders.shift())
  }
  return orders
}
