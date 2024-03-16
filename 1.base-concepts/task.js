"use strict"

function solveEquation(a, b, c) {
    let arr = [];

    let discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
        arr;
    }
    if (discriminant === 0) {
        arr [0] = (-b / (2 * a));
    }
    if (discriminant > 0) {
        arr [0] = ((-b + Math.sqrt(discriminant, 2)) / 2 * a);
        arr [1] = ((-b - Math.sqrt(discriminant, 2)) / 2 * a);
    }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let per = parseInt(percent) / 100 / 12; //процентная ставка
    let con = parseInt(contribution); 	  //начальный взнос
    let am = parseInt(amount);  			  //общая стоимость

    let s = am - con;
    let platej =  (s * (per + (per / (((1 + per)**countMonths) - 1))));
    let fullSumm= (platej * countMonths).toFixed(2);
    return  +fullSumm;

}