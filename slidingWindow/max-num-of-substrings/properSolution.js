const str1 = "abciiidef";
const len1 = 3;
// expected output is 3, as 3 is have 3 vowels

const maxVowels = (s, l) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let maxVowels = 0;
  for (let i = 0; i < l; i++) {
    if (vowels.includes(s[i])) {
      maxVowels++;
    }
  }

  let count = maxVowels;
  for (let i = l; i < s.length; i++) {
    count +=
      (vowels.includes(s[i]) ? 1 : 0) - (vowels.includes(s[i - l]) ? 1 : 0);
    maxVowels = Math.max(count, maxVowels);
  }

  return maxVowels;
};

console.log(maxVowels(str1, len1));
