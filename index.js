// function reverseArray(arr) {
//     return [...arr].reverse();
//   }
  
//   // Example usage:
// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = reverseArray(originalArray);
  
// console.log("Original Array:", originalArray);
// console.log("Reversed Array:", reversedArray);
  


// function leftRotateArray(arr, d) {
//     const n = arr.length;
//     const rotatedArray = arr.slice(d % n).concat(arr.slice(0, d % n));
//     return rotatedArray;
//   }
  
//   // Example usage:
// const originalArray = [1, 2, 3, 4, 5];
// const numberOfRotations = 2;
// const rotatedArray = leftRotateArray(originalArray, numberOfRotations);
  
// console.log("Original Array:", originalArray);
// console.log(`Array after ${numberOfRotations} left rotations:`, rotatedArray);
  


function equalStacks(h1, h2, h3) {
    // Calculate cumulative heights from top to bottom for each stack
    const cumulativeHeight1 = calculateCumulativeHeight(h1);
    const cumulativeHeight2 = calculateCumulativeHeight(h2);
    const cumulativeHeight3 = calculateCumulativeHeight(h3);
  
    // Find the maximum common height among all three stacks
    for (let i = Math.min(cumulativeHeight1.length, cumulativeHeight2.length, cumulativeHeight3.length) - 1; i >= 0; i--) {
      const commonHeight = cumulativeHeight1[i];
  
      // Check if the current commonHeight is also present in the other two stacks
      if (
        cumulativeHeight2.includes(commonHeight) &&
        cumulativeHeight3.includes(commonHeight)
      ) {
        return commonHeight;
      }
    }
  
    // If no common height is found, return 0
    return 0;
  }
  
  function calculateCumulativeHeight(stack) {
    // Calculate cumulative height from top to bottom for a given stack
    const cumulativeHeight = [];
    let currentHeight = 0;
  
    for (let i = stack.length - 1; i >= 0; i--) {
      currentHeight += stack[i];
      cumulativeHeight.push(currentHeight);
    }
  
    // Reverse the array to have cumulative heights from top to bottom
    return cumulativeHeight.reverse();
  }
  
  // Example usage:
const stack1 = [3, 2, 1, 1, 1];
const stack2 = [4, 3, 2];
const stack3 = [1, 1, 4, 1];
  
const maxCommonHeight = equalStacks(stack1, stack2, stack3);
console.log("Maximum Common Height:", maxCommonHeight);
  