// # Test Case 1
const s1 = "IceCreAm";
// Expected Output: "AceCreIm"

// # Test Case 2
const s2 = "leetcode";
// Expected Output: "leotcede"

var reverseVowels = function (s) {
  const vowels = [];
  s.split("")
    .reverse()
    .forEach((character) => {
      if (["a", "e", "i", "o", "u"].includes(character.toLowerCase())) {
        vowels.push(character);
      }
    });

  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(s[i].toLowerCase())) {
      newStr += vowels.shift();
    } else {
      newStr += s[i];
    }
  }

  return newStr;
};
console.log(reverseVowels(s2));
