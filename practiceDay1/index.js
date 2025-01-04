function checkOddOrEven(number) {


    if (isNaN(number)) {
        console.log("Please enter a valid number.");
        return;
    }

    if (number % 2 === 0) {
        console.log(`${number} is Even.`);
    } else {
        console.log(`${number} is Odd.`);
    }
}
checkOddOrEven(4);
// --------------------------------------------------------------------------

function sortArrayAscending(array) {
    if (!Array.isArray(array)) {
        console.log("Please provide a valid array.");
        return;
    }

    const sortedArray = array.sort((a, b) => a - b);
    console.log("Sorted Array:", sortedArray);
    return sortedArray;
}

const randomArray = [12, 3, 7, 1, 20, 9, 15, 6, 4, 18, 2, 5, 8, 14, 11, 10, 13, 16, 19, 17];
sortArrayAscending(randomArray);
// -------------------------------------------------------------------
function isLeapYear(year) {
    if (typeof year !== "number" || isNaN(year)) {
        console.log("Please provide a valid number.");
        return;
    }

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

isLeapYear(2024);
isLeapYear(2023);
isLeapYear(2000);
isLeapYear(1900);
// ------------------------------------------------------------------------------
function findDivisibleBy3And5(start, end) {
    const result = [];

    for (let i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push(i);
        }
    }

    console.log(result);
    return result;
}

findDivisibleBy3And5(1, 50);
// -----------------------------------------------------------
function findBiggestName(names) {
    let biggestName = "";

    for (let i = 0; i < names.length; i++) {
        if (names[i].length > biggestName.length) {
            biggestName = names[i];
        }
    }

    console.log(biggestName);
    return biggestName;
}

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
findBiggestName(friends);

// ---------------------------------------------------------------
function removeDuplicates(arr) {
    const uniqueNumbers = [...new Set(arr)];
    console.log(uniqueNumbers);
    return uniqueNumbers;
}

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
removeDuplicates(numbers);
// -----------------------------------------------------
function findLargestNumber(arr) {
    const uniqueNumbers = [...new Set(arr)];
    const largestNumber = Math.max(...uniqueNumbers);

    console.log(largestNumber);
    return largestNumber;
}

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
findLargestNumber(numbers);
// -------------------------------------------------------------------
function monthlySavings(payments, livingCost) {

    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "invalid input";
    }

    let totalIncome = 0;

    for (let payment of payments) {
        if (payment >= 3000) {
            totalIncome += payment - payment * 0.2;
        } else {
            totalIncome += payment;
        }
    }

    let savings = totalIncome - livingCost;

    if (savings >= 0) {
        return savings;
    } else {
        return "earn more";
    }
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400])); 
