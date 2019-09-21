const arr = [1, 2, 3, 4, 5, 6];
// [6,5,4,3,2,1]

let i = arr.length - 1;

while (arr[i]) {
    console.log(arr[i]);
    i--;
}