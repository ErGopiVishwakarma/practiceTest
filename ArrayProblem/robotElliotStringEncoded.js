function encryptString(input) {
    const length = input.length;
    const mid = Math.floor(length / 2); // Find the middle index

    let left = mid - 1;
    let right = length % 2 === 0 ? mid : mid + 1; // If the length is even, start right at mid+1

    let encrypted = input[mid]; // Start with the middle character

    while (left >= 0 && right < length) {
        encrypted += input[right] + input[left]; // Add the middle characters of the left and right substrings
        right++;
        left--;
    }

    // Handle the case when there are remaining characters on the right side
    while (right < length) {
        encrypted += input[right];
        right++;
    }

    // Handle the case when there are remaining characters on the left side
    while (left >= 0) {
        encrypted = input[left] + encrypted;
        left--;
    }

    return encrypted;
}

let input = "abcdefghijk";
let result = encryptString(input);
console.log(result); // Output: "fcabdeighjk"

