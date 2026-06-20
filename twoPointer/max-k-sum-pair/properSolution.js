const nums1 = [3, 1, 3, 4, 3];
const sum1 = 6;
// expected output = 2

const maxKsumPairs = (nums, k) => {
  // sort it
  nums.sort((a, b) => a - b);
  let start = 0;
  let end = nums.length - 1;
  let counter = 0;
  while (start < end) {
    const sum = nums[start] + nums[end];
    if (sum === k) {
      counter++;
      start++;
      end--;
    } else if (sum > k) {
      end--;
    } else {
      start++;
    }
  }

  return counter;
};

console.log(maxKsumPairs(nums1, sum1));
