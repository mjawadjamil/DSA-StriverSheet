let arr = [13, 46, 24, 52, 20, 9];
// let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let n = arr.length;
console.log("Before Selection Sort");
console.log(arr.join(' '));
console.log("After Selection Sort");
// 1st : lets make them in ascending order
// 2nd : swap the smallest values

function selectionsort() {
    for (let i = 0; i <= n - 2; i++) {
        let mini = i;
        for (let j = i; j <= n - 1; j++) {
            if (arr[j] < arr[mini]) {
                mini = j;
            }
        }

        // let temp = 0;
        let temp = arr[mini];
        arr[mini] = arr[i];
        arr[i] = temp;
    }


    // for (let i = 0; i < n; i++) {
        console.log(arr.join(' '))
    // }


}

selectionsort();



