var birthYears = [1992, 1998, 2000, 1947, 1998];

let ages = birthYears.map(ageFinding);
function ageFinding(ele) {
    return 2022 - ele;
}
console.log(ages);
console.table(ages);// it shows in the table formate.