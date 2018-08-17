// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [{
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
    },
    {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727
    },
    {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
    },
    {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934
    },
    {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630
    },
    {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543
    },
    {
        first: 'Max',
        last: 'Planck',
        year: 1858,
        passed: 1947
    },
    {
        first: 'Katherine',
        last: 'Blodgett',
        year: 1898,
        passed: 1979
    },
    {
        first: 'Ada',
        last: 'Lovelace',
        year: 1815,
        passed: 1852
    },
    {
        first: 'Sarah E.',
        last: 'Goode',
        year: 1855,
        passed: 1905
    },
    {
        first: 'Lise',
        last: 'Meitner',
        year: 1878,
        passed: 1968
    },
    {
        first: 'Hanna',
        last: 'Hammarström',
        year: 1829,
        passed: 1909
    }
];


// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
//ES6
let bornSixteenAC = inventors.filter(inventor => (Math.floor((inventor.year) / 100) === 15));

//ES5
// var bornSixteenAC = inventors.filter(function (inventor) {
//     if (Math.floor(inventor.year / 100) === 15) {
//         return true
//     };
// });
console.table(bornSixteenAC);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
//ES6
let fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)

//ES5
// var fullNames = inventors.map(function (inventor) {
//     return `${inventor.first} ${inventor.last}`;
// })
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
//ES6
let sortBirthdate = inventors.sort((firstInventor, secondInventor) => secondInventor.year - firstInventor.year);

//ES5-1
// var sortBirthdate = inventors.sort(function (firstInventor, secondInventor) {
//     if (secondInventor.year - firstInventor.year > 0) {
//         return 1;
//     } else {
//         return -1;
//     }
// })

//ES5-2
// var sortBirthdate = inventors.sort(function (firstInventor, secondInventor) {
//     return secondInventor.year - firstInventor.year;
// })
console.table(sortBirthdate);
// Array.prototype.reduce()
// 4. How many years did all the inventors live?

let totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
}, 0);

// let totalYears = inventors.reduce(function (total, inventor) {
//     console.log(inventor);
//     return total + (inventor.passed - inventor.year)
// }, 0)
console.log(totalYears);

// 5. Sort the inventors by years lived
let sortYearLived = inventors.sort((a, b) => {
    firstInventorAge = a.passed - a.year;
    secondInventorAge = b.passed - b.year;
    return secondInventorAge - firstInventorAge;
});

console.table(sortYearLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// let linksArr = Array.from(document.querySelectorAll('.mw-category a'));
// let roadNamesArr = linksArr.map(link => link.textContent);
// let de = roadNamesArr.filter(roadName => roadName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
const alpha = people.sort((firstPeople, secondPeople) => {
    const [aLastName, aFirstName] = firstPeople.split(', ');
    const [bLastName, bFirstName] = secondPeople.split(', ');
    return aLastName > bLastName ? 1 : -1; 
})
console.table(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const kind = data.reduce((counterObj, item) => {
    if (!counterObj[item]) {
        counterObj[item] = 0;
    }
    counterObj[item]++
    return counterObj;
}, {})
console.log(kind);