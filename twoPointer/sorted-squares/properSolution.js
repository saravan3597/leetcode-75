const sortedSquares = (nums) => {
  let result = new Array(nums.length);
  let left = 0,
    right = nums.length - 1;
  let pos = right;

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[pos] = nums[left] * nums[left];
      left++;
    } else {
      result[pos] = nums[right] * nums[right];
      right--;
    }
    pos--;
  }
  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
