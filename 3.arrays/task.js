"use strict"

function compareArrays(arr1, arr2) {
    return arr1.every(function (el, index) {
        if (arr1.length === arr2.length) {
            return el === arr2[index];
        }
        return false;
    });
}

function getUsersNamesInAgeRange(users, gender) {
    let mas = users.filter(item => item.gender === gender).map(item => item.age);
    let res = mas.reduce((sum, age) => sum + age, 0);

    return (mas.length > 0) ? res / mas.length : 0;

}