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
//expected output = "apbqcd"

const mergeAlternatively = (w1, w2) => {
  let mergedWord = "";
  let index = 0;
  for (let i = 0; i < w1.length; i++) {
    if (w1[i] && w2[i]) {
      mergedWord += w1[i] + w2[i];
      index = i;
    }
  }
  if (w1.length > w2.length && index < w1.length - 1)
    mergedWord += w1.substring(index + 1, w1.length);
  if (w2.length > w1.length && index < w2.length - 1)
    mergedWord += w2.substring(index + 1, w2.length);

  return mergedWord;
};

console.log(mergeAlternatively(word5, word6));
