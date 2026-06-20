const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// expected output = 49

const container = (input) => {
  let start = 0,
    end = input.length - 1;
  let maxArea = 0;
  while (start < end) {
    const area = Math.min(input[start], input[end]) * (end - start);
    console.log(area, "area");
    // Height = shortest of two lines
    // Width = distance between two lines
    maxArea = Math.max(area, maxArea);
    if (input[start] > input[end]) {
      end--;
    } else {
      start++;
    }
  }
  return maxArea;
};

console.log(container(input1));
