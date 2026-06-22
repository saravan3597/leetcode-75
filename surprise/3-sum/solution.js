const nums1 = [-1, 0, 1, 2, -1, -4];

const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let start = i + 1,
      end = nums.length - 1;

    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum === 0) {
        triplets.push([nums[i], nums[start], nums[end]]);
        start++;
        end--;
      } else if (sum > 0) {
        end--;
      } else {
        start++;
      }
    }
  }

  return triplets;
};

console.log(threeSum(nums1));
