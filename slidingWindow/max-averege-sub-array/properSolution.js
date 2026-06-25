const nums1 = [1, 12, -5, -6, 50, 3];
const k1 = 4;
// Expected output is 4

const maxAverege = (nums, k) => {
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }
  let sum = maxSum;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum / k;
};

console.log(maxAverege(nums1, k1));
