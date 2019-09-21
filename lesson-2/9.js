const arr = [1, 2, 3, 4, 5, 6];
// [6,5,4,3,2,1]

const reversedArr = [];

let i = arr.length - 1;
let j = 0;

while (arr[i]) {
    reversedArr[j] = arr[i];
    i--;
    j++;
}
console.log(reversedArr);
