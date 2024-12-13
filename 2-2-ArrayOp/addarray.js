// Selected arithmetic operations on nested arrays
const nArray = [2, 3, "World", {name: "Alice"}, {age: 25}, [true, false],["a", "b"], [2, 3], [5, 7, 8], [10, 9, 8, 6]];

// Function to calculate the sum of selected numbers in selected nested arrays
function sumNestedArray() {
    let sum = 0;
    let count = 0;

    // Loop through the nested arrays in reverse
    for (let i = nArray.length - 1; i >= 0; i--) {
        // Get the current array
        const currentArray = nArray[i];

        //Get the last two numbers of the current array
        const lastTwoNums = currentArray.slice(-2);

        // Add these numbers to the sum
        sum += lastTwoNums.reduce((a, b) => a + b, 0);

        // Count increment of processed arrays
        count++;

        // Stop after processing the last two arrays
        if (count === 2) break;
    }

    return sum;
}

// Calculate the sum
const totalSum = sumNestedArray();

// Display the result in the HTML
document.getElementById('result').innerText = `The sum of the last two numbers of the last two arrays in the nested array is: ${totalSum}`;


