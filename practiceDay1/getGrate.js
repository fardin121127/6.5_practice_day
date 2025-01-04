
function getGrade(percentage) {
    if (percentage >= 80 && percentage <= 100) {
        return 'A+';
    } else if (percentage >= 60 && percentage < 80) {
        return 'A';
    } else if (percentage >= 40 && percentage < 60) {
        return 'B';
    } else if (percentage >= 0 && percentage < 40) {
        return 'C';
    } else {
        return 'Invalid percentage';
    }
}

console.log(getGrade(85));
console.log(getGrade(72));
console.log(getGrade(55));
console.log(getGrade(30));
console.log(getGrade(120));
