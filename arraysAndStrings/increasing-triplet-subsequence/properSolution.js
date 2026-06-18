// # Test Case 1
const nums1 = [1, 2, 3, 4, 5];
// expected output = true , becayse 1, 2, 3 are triplets in increasing order

// # Test Case 2
const nums2 = [5, 4, 3, 2, 1];
// expected output = false , because no triplet exists

// # Test Case 3
const nums3 = [2, 1, 5, 0, 4, 6];
// expected output = true , because 1, 4, 5 triplet exists

const increasingTriplet = (nums) => {
  let first = Infinity;
  let second = Infinity;

  for (const num of nums) {
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else {
      return true;
    }
  }

  return false;
};

console.log(isTriplets(nums1));
