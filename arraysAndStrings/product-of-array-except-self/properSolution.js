// # Test Case 1
const nums1 = [1, 2, 3, 4];
// Output: [24,12,8,6]

// # Test Case 2
const nums2 = [-1, 1, 0, -3, 3];
// Output: [0,0,9,0,0]

const productOfArray = (arr) => {
  const n = arr.length;
  const left = new Array(n).fill(1);
  const right = new Array(n).fill(1);
  const answer = new Array(n);

  // Create left and right arrays

  // Compute the prefix and suffix products

  //

  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * arr[i - 1];
  }
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * arr[i + 1];
  }

  for (let i = 0; i < n; i++) {
    answer[i] = left[i] * right[i];
  }

  return answer;
};

console.log(productOfArray(nums1));
