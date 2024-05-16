// let arr = [13, 46, 24, 52, 20, 9];
let arr = [2,3,5,15,20];
let n = arr.length;

console.log("Before Bubble Sort");
console.log(arr.join(' '));
console.log("After Bubble Sort");

function BubbleSwap() {

    for(let i=n-1; i>=1; i--)
    {
        let didswap = 0;

        // Reason for (i-1) because there will be no (j+1) after 5. So it will through error.
        // That is why we wants to keep it 4. So (j+1) could be compared easily.
        for(let j=0; j<=i-1; j++)
        {
            if(arr[j] > arr[j+1])
            {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                didswap = 1;
            }
        }
        // It means given array was already sorted
        if(didswap == 0)
        {
            break;
        }
    }

    // For output in multiplr lines
    // for(let i=0; i<n ; i++)
    // {
    //     console.log(arr[i])
    // }

    // For output in single line
    console.log(arr.join(' '));
}

BubbleSwap();