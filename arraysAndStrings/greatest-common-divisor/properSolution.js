// # TestCase 1
const word1 = "ABCABC";
const word2 = "ABC";
//expected output = "ABC"

// # TestCase 2
const word3 = "ABABAB";
const word4 = "ABAB";
//expected output = "AB"

// # TestCase 3
const word5 = "AAAAAB";
const word6 = "AAA";
//expected output = ""

const gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";

  const m = str1.length;
  const n = str2.length;

  // Logic to find the GCD of any number
  const gcd = (x, y) => {
    if (!y) return x;
    return gcd(y, x % y);
  };

  const div = gcd(m, n);
  const result = str1.slice(0, div);

  return result;
};

console.log(gcdOfStrings(word5, word6));
