/**
 * Generates benchmarks for sum operation with for, forEach, reduce, for of and while operators
 */
import {generateReport} from "../shared/report-generator";
import {LoopData} from "../data/interface";

/**
 * Create array with a given length
 * @param len
 */
function createArray(len: number): number[] {
    return Array.from({ length: len }, (value: number, index: number, ) => index + 1);
}

/**
 * Calculate difference between times and round to 3 decimal places
 * @param startTime
 * @param endTime
 */
function roundTime(startTime: number, endTime: number): number {
    let totalTime  = endTime - startTime;
    totalTime = Math.ceil(totalTime * 1000) / 1000;

    return totalTime;
}

/**
 * Calculate sum with for operator
 * @param arr
 */
function sumFor(arr: number[]): LoopData {
    let sumFor = 0;
    let totalTime;
    const startTime = performance.now();

    for(let i = 0; i < arr.length; i++) {
        sumFor += arr[i];
    }

    totalTime  = roundTime(startTime, performance.now());

    console.log(`for sum ${arr.length} items: execution time: ${totalTime}ms`);
    console.log(`for sum ${arr.length} items: sum result:`, sumFor);

    return {
        count: arr.length,
        operator: 'for',
        time: totalTime,
        result: sumFor
    }
}

/**
 * Calculate sum with forEach operator
 * @param arr
 */
function sumForEach(arr: number[]): LoopData {
    let sumForEach = 0;
    let totalTime;
    const startTime = performance.now();

    arr.forEach((num: number) => {
        sumForEach += num;
    })

    totalTime  = roundTime(startTime, performance.now());

    console.log(`forEach sum ${arr.length} items: execution time: ${totalTime}ms`);
    console.log(`forEach sum ${arr.length} items: sum result:`, sumForEach);

    return {
        count: arr.length,
        operator: 'forEach',
        time: totalTime,
        result: sumForEach
    }
}

/**
 * Calculate sum with reduce operator
 * @param arr
 */
function sumReduce(arr: number[]): LoopData {
    let totalTime;
    const startTime = performance.now();

    const sumReduce = arr.reduce((acc, currentValue) => acc + currentValue, 0);

    totalTime  = roundTime(startTime, performance.now());

    console.log(`reduce sum ${arr.length} items: execution time: ${totalTime}ms`);
    console.log(`reduce sum ${arr.length} items: sum result:`, sumReduce);

    return {
        count: arr.length,
        operator: 'reduce',
        time: totalTime,
        result: sumReduce
    }
}

/**
 * Calculate sum with for of operator
 * @param arr
 */
function sumForOf(arr: number[]): LoopData {
    let sumForOf = 0;
    let totalTime;
    const startTime = performance.now();

    for(let num of arr) {
        sumForOf += num;
    }

    totalTime  = roundTime(startTime, performance.now());

    console.log(`for of sum ${arr.length} items: execution time: ${totalTime}ms`);
    console.log(`for of sum ${arr.length} items: sum result:`, sumForOf);

    return {
        count: arr.length,
        operator: 'forOf',
        time: totalTime,
        result: sumForOf
    }
}

/**
 * Calculate sum with for of operator
 * @param arr
 */
function sumWhile(arr: number[]): LoopData {
    let sumWhile = 0;
    let index = 0;
    let totalTime;
    const startTime = performance.now();

    while(index < arr.length) {
        sumWhile+=arr[index];
        index++;
    }

    totalTime  = roundTime(startTime, performance.now());

    console.log(`for of while ${arr.length} items: execution time: ${totalTime}ms`);
    console.log(`for of while ${arr.length} items: sum result:`, sumWhile);

    return {
        count: arr.length,
        operator: 'while',
        time: totalTime,
        result: sumWhile
    }
}

/*** Testing ***/
const testData = [1000,100000,1000000];
const resultData: LoopData[] = [];

testData.forEach((count: number) => {
    console.log(`Sum benchmark results for ${count} items`);
    const arr1 = createArray(count);
    resultData.push(sumFor(arr1));
    resultData.push(sumForEach(arr1))
    resultData.push(sumReduce(arr1));
    resultData.push(sumForOf(arr1));
    resultData.push(sumWhile(arr1));
    console.log('\n');
})

// Generate report
generateReport(resultData, 5);