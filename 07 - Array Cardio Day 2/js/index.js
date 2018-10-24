// ## Array Cardio Day 2

const people = [{
        name: 'Wes',
        year: 1988
    },
    {
        name: 'Kait',
        year: 1986
    },
    {
        name: 'Lux',
        year: 2015
    },
    {
        name: 'Irv',
        year: 1970
    }
];

const comments = [{
        text: 'Love this!',
        id: 523423
    },
    {
        text: 'Super good',
        id: 823423
    },
    {
        text: 'You are the best',
        id: 2039842
    },
    {
        text: 'Ramen is my fav food ever',
        id: 123523
    },
    {
        text: 'Nice Nice Nice!',
        id: 542328
    }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
//ES6
const someoneOlderThanNineteen = people.some(person => ((new Date()).getFullYear()) - person.year > 19);
//ES5
// const someoneOlderThanNineteen = people.some(person => {
//     const currentYear = (new Date()).getFullYear();
//     if (currentYear - person.year > 19) {
//         return true;
//     }
// });
console.log(someoneOlderThanNineteen);

// Array.prototype.every() // is everyone 19 or older?
//ES6
const everyoneOlderThanNineteen = people.every(person => ((new Date()).getFullYear()) - person.year > 19);
//ES5
// const everyoneOlderThanNineteen = people.every(person => {
//     const currentYear = (new Date()).getFullYear();
//     if (currentYear - person.year > 19) {
//         return true;
//     }
// });
console.log(everyoneOlderThanNineteen);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
//ES6
const comment = comments.find(comment => comment.id === 823423);
//ES5
// const comment = comments.find(function (comment) {
//     if (comment.id === 823423) {
//         return true;
//     }
// })
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423);
comments.splice(index, 1);
console.table(index, comments);

//自我挑戰題,使用arr.slice()刪除people小於20歲的人

const getIndex = people.findIndex(person => new Date().getFullYear() - person.year < 20);
const newPeople = (people.slice(0, getIndex)).concat(people.slice(getIndex + 1));
// const newPeople = [
//     ...people.slice(0, getIndex),
//     ...people.slice(getIndex + 1)
// ]
console.log(people);
console.log(newPeople);