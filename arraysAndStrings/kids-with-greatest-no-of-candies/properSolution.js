// # TestCase 1
const candies1 = [2, 3, 5, 1, 3];
const extraCandies1 = 3;
//expected output = [true,true,true,false,true]

// # TestCase 2
const candies2 = [4, 2, 1, 1, 2];
const extraCandies2 = 1;
//expected output = [true,true,true,false,true]

var kidsWithCandies = function (candies, extraCandies) {
  const greatest = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies > greatest);
};

console.log(kidsWithCandies(candies2, extraCandies2));
