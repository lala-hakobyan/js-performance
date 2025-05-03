/**
 * Results Node 16.20.2
 * 1. 1000 items
 *   for ~ 0.07ms
 *   forEach ~ 0.047ms
 *   reduce ~ 0.027ms
 * 2. 100000 items
 *   for ~ 2.913ms
 *   forEach ~ 1.624ms
 *   reduce ~ 1.397ms
 * 3. 1000000 items
 *   for ~ 1.043ms
 *   forEach ~ 12.787ms
 *   reduce ~ 9.603ms
 *
 * Results Node 22.0.2
 * 1. 1000 items
 *   for ~ 0.075ms
 *   forEach ~ 0.039ms
 *   reduce ~ 0.032ms
 * 2. 100000 items
 *   for ~ 1.281ms
 *   forEach ~ 0.893ms
 *   reduce ~ 1.012ms
 * 3. 1000000 items
 *   for ~ 2.247ms
 *   forEach ~ 12.54ms
 *   reduce ~ 6.907ms
 */

/**
 * Create array with a given length
 * @param len
 */
function createArray(len: number): number[] {
    return Array.from({ length: len }, (value: number, index: number, ) => index + 1);
}

/**
 * Calculate sum with for operator
 * @param arr
 */
function sumFor(arr: number[]) {
    let sumFor = 0;

    console.time(`for sum length: ${arr.length} items`);

    for(let i = 0; i < arr.length; i++) {
        sumFor += arr[i];
    }

    console.timeEnd(`for sum length: ${arr.length} items`);
    console.log('for sum result: ${arr.length} items', sumFor);
}

/**
 * Calculate sum with forEach operator
 * @param arr
 */
function sumForEach(arr: number[]) {
    let sumForEach = 0;

    console.time(`forEach sum length: ${arr.length} items`);

    arr.forEach((num: number) => {
        sumForEach += num;
    })

    console.timeEnd(`forEach sum length: ${arr.length} items`);
    console.log('forEach sum result', sumForEach);
}

/**
 * Calculate sum with forEach operator
 * @param arr
 */
function sumReduce(arr: number[]) {
    // Calculate sum with reduce
    console.time(`reduce sum length: ${arr.length} items`);

    const sumReduce = arr.reduce((acc, currentValue) => acc + currentValue, 0);

    console.timeEnd(`reduce sum length: ${arr.length} items`);
    console.log('reduce sum result', sumReduce);
}

/*** Testing ***/

// 1000 results
console.log('Sum benchmark results for 1000 items');
const arr1 = createArray(1000);
sumFor(arr1);
sumForEach(arr1);
sumReduce(arr1);
console.log('\n');

// 100000 results
console.log('Sum benchmark results for 100000 items');
const arr2 = createArray(100000);
sumFor(arr2);
sumForEach(arr2);
sumReduce(arr2);
console.log('\n');

// 1000000 results
console.log('Sum benchmark results for 1000000 items');
const arr3 = createArray(1000000);
sumFor(arr3);
sumForEach(arr3);
sumReduce(arr3);
console.log('\n');