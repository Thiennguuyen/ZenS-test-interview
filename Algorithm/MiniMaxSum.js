const sortArray = (arr) => {
    let temp;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function miniMaxSum(arr) {
    arr = sortArray(arr);
    let min = arr[0] + arr[1] + arr[2] + arr[3];
    let max = arr[1] + arr[2] + arr[3] + arr[4];
    console.log(min, max);
}

function Bonus(arr) {
    arr = sortArray(arr);
    const sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
    let odd = [];
    let even = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    console.log("Total of array:", sum);
    console.log("Odd numbers:", odd);
    console.log("Even numbers:", even);
    console.log("Min:", arr[0]);
    console.log("Max:", arr[4]);
}

var arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);