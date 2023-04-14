const toCm = 2.54;
const toM = 0.3048;
const toKG = 0.453592;
const toKM =  1.60934;

function getInches(inches: number): number 
{
    let result = inches * toCm;
    console.log("[0]", result)
    return result;
} 

function getFeet(ft: number): number
{;
    let result = ft * toM;
    console.log("[0]", result)
    return result;
}

function getPounds(pound: number): number
{
    let result = pound * toKG;
    console.log("[0]", result)
    return result;
}

function getCelsius(Fahrenheit: number): number
{
    let result = (Fahrenheit - 32) * 5/9;
    console.log("[0]", result)
    return result;
}

function getKM(Miles: number): number
{
    let result = Miles * toKM;
    console.log("[0]", result)
    return result;
}
getInches(54)
getFeet(45);
getPounds(76);
getCelsius(34);
getKM(15);

