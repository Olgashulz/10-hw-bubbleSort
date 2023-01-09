function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            let t;
            if (arr[j] > arr[j + 1]) {
                t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
}

const arr = [100, 8, -5, 4, -1, 0, 2];
bubbleSort(arr);
console.log(arr);
console.log("====================================")
// ================================================

const arr1 = [100, 8, -5, 4, -1, 0, 2];
const arr2 = ['100', '8', '-5', '4', '-1', '0', '2'];
const arr3 = ['JavaScript', 'Java', 'Python', 'C++', 'PHP']
const arr4 = [new Person('Mary', 'Smith', 19), new Person('John', 'Bouly', 29),
    new Person('Peter', 'Pen', 59)]

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}

function multiFuncBubbleSort(arr, compares) {
    compares = compares(arr[0]);
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            let t;
            if (compares(arr[j], arr[j + 1])) {
                t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
}

function compares(el) {
    if (typeof el === 'string' && Number(el)) {
        return function (a, b) {
            return +a > +b;
        };
    }
    if (typeof el === 'string' || typeof el === 'number') {
        return function (a, b) {
            return a > b;
        };
    }
    if (typeof el === 'object') {
        return function (a, b) {
            return a['firstName'] > b['firstName'];
        };
    }
}

multiFuncBubbleSort(arr1, compares);
console.log(arr1);
multiFuncBubbleSort(arr2, compares);
console.log(arr2);
multiFuncBubbleSort(arr3, compares);
console.log(arr3);
multiFuncBubbleSort(arr4, compares);
console.log(arr4);




