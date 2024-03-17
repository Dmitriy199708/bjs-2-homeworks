"use strict"
//Задание 1
function getArrayParams(...arr) {
    if (!arr || arr.length === 0) {
        return 0;
    }
    let min, max, sum, avg;
    sum = 0;
    min = max = arr[0];
    // max = -Infinity;
    // min = Infinity;
    arr.forEach(element => {
        sum += element;
        if (element <= min) {
            min = element;
        }
        if (element >= max) {
            max = element;
        }
    });
    avg = +(sum / arr.length).toFixed(2);
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i]
    //     if (min >= arr[i]) {
    //         min = arr[i];
    //         console.log(max);
    //     }
    //     if (max <= arr[i]) {
    //         max = arr[i];
    //         console.log(min);
    //     }
    //     avg = +(sum / arr.length).toFixed(2);
    // }
    return {min: min, max: max, avg: avg};
}

function summElementsWorker(...arr) {
    if (!arr || arr.length === 0) {
        return 0;
    }
    const initialValue = 0;
    const sumArr = arr.reduce(
        (a, b) => a + b,
        initialValue,
    );
    return sumArr;
}

function differenceMaxMinWorker(...arr) {
    let max, min;
    if (!arr || arr.length === 0) {
        return 0;
    }
    max = Math.max.apply(null, arr);
    min = Math.min.apply(null, arr);
    return max - min;
}

function differenceEvenOddWorker(...arr) {
    let sumEvenElement, sumOddElement, elementDifference;
    sumEvenElement = sumOddElement = elementDifference = 0;

    arr.forEach(element => {
        if (!arr || arr.length === 0) {
            return 0;
        }
        if (element % 2 === 0) {
            sumEvenElement += element;
        } else {
            sumOddElement += element;
        }
    });
    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (let i = 0; i <= arr.length; i++) {
        if (!arr || arr.length === 0) {
            return 0;
        }
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
            countEvenElement++;
        }
    }
    return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;

    for (let i = 0; i < arrOfArr.length; i++) {
        const result = func(...arrOfArr[i]); // применяем функцию-насадку к текущему массиву данных

        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }

    return maxWorkerResult;
}
