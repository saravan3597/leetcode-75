// # Test Case 1
const input1 = [1, 2, 0, 0, 4, 6, 0];
// Expected output is [1,2,4,6,0,0,0]

const moveZeros = (input) => {
  let write = 0,
    read = 0;
  while (read < input.length) {
    if (input[read] !== 0) {
      [input[write], input[read]] = [input[read], input[write]];
      write++;
      read++;
    } else {
      read++;
    }
  }
  return input;
};
