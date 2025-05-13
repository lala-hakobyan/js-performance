/**
 * Results Node 16.20.2
 * 1. 1000 items
 *   for ~ 0.073ms
 *   forEach ~ 0.05ms
 *   reduce ~ 0.026ms
 *   for of ~ 0.093ms
 * 2. 100000 items
 *   for ~ 3.024ms
 *   forEach ~ 1.599ms
 *   reduce ~ 1.141ms
 *   for of ~ 5.183ms
 * 3. 1000000 items
 *   for ~ 1.005ms
 *   forEach ~ 12.971ms
 *   reduce ~ 8.876ms
 *   for of ~ 1.035ms
 *
 * Results Node 22.0.2
 * 1. 1000 items
 *   for ~ 0.083ms
 *   forEach ~ 0.039ms
 *   reduce ~ 0.035ms
 *   for of ~ 0.05ms
 * 2. 100000 items
 *   for ~ 1.33ms
 *   forEach ~ 0.936ms
 *   reduce ~ 0.903ms
 *   for of ~ 2.043ms
 * 3. 1000000 items
 *   for ~ 3.277ms
 *   forEach ~ 10.997ms
 *   reduce ~ 7.067ms
 *   for of ~ 7.505ms
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
    console.log(`for sum result: ${arr.length} items:`, sumFor);
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
    console.log(`forEach sum result: ${arr.length} items:`, sumForEach);
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
    console.log(`reduce sum result: ${arr.length} items:`, sumReduce);
}

/**
 * Calculate sum with for of operator
 * @param arr
 */
function sumForOf(arr: number[]) {
    let sumForOf = 0;

    console.time(`for of sum length: ${arr.length} items`);

    for(let num of arr) {
        sumForOf += num;
    }

    console.timeEnd(`for of sum length: ${arr.length} items`);
    console.log(`for of sum result: ${arr.length} items`, sumForOf);
}

/*** Testing ***/

// 1000 results
console.log('Sum benchmark results for 1000 items');
const arr1 = createArray(1000);
sumFor(arr1);
sumForEach(arr1);
sumReduce(arr1);
sumForOf(arr1);
console.log('\n');

// 100000 results
console.log('Sum benchmark results for 100000 items');
const arr2 = createArray(100000);
sumFor(arr2);
sumForEach(arr2);
sumReduce(arr2);
sumForOf(arr2);
console.log('\n');

// 1000000 results
console.log('Sum benchmark results for 1000000 items');
const arr3 = createArray(1000000);
sumFor(arr3);
sumForEach(arr3);
sumReduce(arr3);
sumForOf(arr3);
console.log('\n');