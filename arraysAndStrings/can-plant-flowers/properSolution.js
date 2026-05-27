// # Test Case 1
const flowerBed1 = [1, 0, 0, 0, 1];
const n1 = 1;
// Expected Output: true

// # Test Case 2
const flowerBed2 = [1, 0, 0, 0, 1];
const n2 = 2;
// Expected Output: false

// # Test Case 3
const flowerBed3 = [1, 0, 0, 0, 0, 0, 1];
const n3 = 2;
// Expected Output: true

var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (!n) return true;
    if (!flowerbed[i]) {
      if (!flowerbed[i + 1] && !flowerbed[i - 1] && n) {
        flowerbed[i] = 1;
        n--;
      }
    }
  }
  return !n;
};

console.log(canPlaceFlowers(flowerBed2, n2));
