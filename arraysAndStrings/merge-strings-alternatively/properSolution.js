// # TestCase 1
const word1 = "be";
const word2 = "bab";
//expected output = "bbeab"

// # TestCase 2
const word3 = "abcd";
const word4 = "pq";
//expected output = "apbqcd"

// # TestCase 3
const word5 = "abc";
const word6 = "pqr";
//expected output = "apbqcr"

/* Two pointer approach */
const mergeAlternatively = (w1, w2) => {
  let i = 0,
    j = 0;
  let result = "";

  while (i < w1.length || j < w2.length) {
    if (i < w1.length) result += w1[i++];
    if (j < w2.length) result += w2[j++];
  }

  return result;
};

console.log(mergeAlternatively(word5, word6));
