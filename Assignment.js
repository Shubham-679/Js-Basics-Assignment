

// Solution -1

const multiPliers = (num, len) => {

    var arrayValue = [];
    for (let i = 1; i <= len; i++) {
        var element = i * num;
        arrayValue.push(element)
    }
    console.log(arrayValue)

}
multiPliers(5, 4)


// Solution -2


const trueValue = () => {

    values = [true, false, true, true]
    const count = values.filter(Boolean).length;
    console.log(`Total No. of True Values : ${count}`);
}
trueValue()


// Solution -3


const findWord = (str) => {

    const word = "Best"
    const value = str.includes(word);
    if (value) {
        const a = str.split(" ");
        let b = a.indexOf(word)
        b++;
        console.log(`I found ${word} at ${b}th Position`)
    } else {
        console.log(`I didnt found ${word} in given string`)
    }

}
findWord("He is Best the player!")


// Solution -4


const getBudgets = (arr) => {

    // let sum = arr.map(el => el.budget)
    //     .reduce((p, n) => { return p + n });
    let sum = arr.reduce((p, n) => { return p + n.budget },0);
    console.log(`Sum of budgets : ${sum}`);
}

getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
])


// Solution -5


const findLongest = (sentence) => {

    var longestWord = sentence.split(' ')
        .reduce(function (longest, currentWord) {
            return currentWord.length > longest.length ? currentWord : longest;
        }, "");
        console.log(`The Longest Word of Given String is : ${longestWord}`)
    return longestWord;
}
findLongest("abraham benjamin deviliers is south african cricketer");


// Solution -6


const sortByLength = (str) => {

    var strSplit = str.split(' ');
    strSplit.sort(function (a, b) {
        return a.length - b.length;
    });
    var x = strSplit.join(" ");
    console.log(`Sorted String is : ${x}`);

}
sortByLength("anyh have a wonderful day")


// Solution -7


const sortArray = (num) => {

    const sortedArray = num.sort();
    console.log(`Sorted Array : ${sortedArray}`)

}
sortArray([4, 8, 9, 3, 7])


// Solution -8


class Movie {

    constructor(movies) {
        this.movies = [
            { 'name': 'Baaghi', 'duration': 120 },
            { 'name': 'Panga', 'duration': 60 },
            { 'name': 'Drive', 'duration': 240 }];
    }

    calculateDuration() {
        let totalDuration = this.movies.map(el => el.duration)
            .reduce((p, n) => { return p + n });
        console.log(`Total Duration of all movies : ${totalDuration}`);
    }
    getAllName() {
        let moviesName = this.movies.map(el => el.name)
        console.log(moviesName)
    }
}

let movie = new Movie();
movie.calculateDuration();
movie.getAllName();
