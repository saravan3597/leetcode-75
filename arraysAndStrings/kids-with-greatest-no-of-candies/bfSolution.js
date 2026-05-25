// # TestCase 1
const candies1 = [2, 3, 5, 1, 3];
const extraCandies1 = 3;
//expected output = [true,true,true,false,true]

// # TestCase 2
const candies2 = [4, 2, 1, 1, 2];
const extraCandies2 = 1;
//expected output = [true,true,true,false,true]

var kidsWithCandies = function (candies, extraCandies) {
  const greatest = [];

  const greatestOfAll = (num) => {
    var greater = true;
    candies.forEach((candy) => {
      if (num < candy) {
        greater = false;
      }
    });
    return greater;
  };

  for (let i = 0; i < candies.length; i++) {
    if (greatestOfAll(candies[i] + extraCandies)) {
      greatest[i] = true;
    } else {
      greatest[i] = false;
    }
  }

  return greatest;
};
