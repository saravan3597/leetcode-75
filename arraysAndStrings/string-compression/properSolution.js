// # Test Case 1
const chars1 = ["a", "a", "b", "b", "c", "c", "c"];
// Expected output is 6. Because, The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
// After modifying the input array in-place, the first 6 characters of chars should be ["a","2","b","2","c","3"].

const compress = (chars) => {
  let write = 0;
  let i = 0;

  while (i < chars.length) {
    const char = chars[i];
    let count = 0;

    // count the group
    while (i < chars.length && chars[i] === char) {
      i++;
      count++;
    }

    // write the character
    chars[write] = char;
    write++;

    // write the count if > 1
    if (count > 1) {
      for (const digit of String(count)) {
        chars[write] = digit;
        write++;
      }
    }
  }

  return write;
};

console.log(compress(chars1));

// const compressStinrg = (chars) => {
//   let writes = 0;
//   let i = 0;

//   while (i < chars.length) {
//     const char = chars[i];
//     let count = 0;

//     // Counting the group
//     while (i < chars.length && char === chars[i]) {
//       count++;
//       i++;
//     }

//     // write the character - 1 write
//     chars[write] = char;
//     write++;

//     // write the count if > 1
//     if (count > 1) {
//       for (const digit of String(count)) {
//         chars[write] = digit;
//         write++;
//       }
//     }
//   }
//   return write;
// };
