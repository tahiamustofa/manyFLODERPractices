// const makeAvg = (arr) => {
// const sum = arr.reduce((acc, val) => acc + val, 0);
// const avg = sum / arr.length;
// return [arr.length, avg];
// };
// Define an array outside the function
const outSide = [1, 2, 3, 4, 5];
const inSide=[6,7,8,5,6,3];
function calculateAverage(arr){
 // Initialize a variable to store the sum
let totalSum=0;
// Iterate through the array and add each element to the sum
for (let index = 0; index < arr.length; index++) {
    totalSum = totalSum + arr[index];
    }

  // Calculate the average by dividing the sum by the length of the array
  const average = totalSum / arr.length;
console.log(totalSum);
  // Return the average
  return average;
}
// Call the function to calculate the average of the outSide array
const outAverage = calculateAverage(outSide);
const sec_Avg = calculateAverage(inSide);
// Print the average
console.log(outAverage);
console.log(sec_Avg);
