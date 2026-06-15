// # Test Case 1
const s1 = "the sky is blue";
// Output: "blue is sky the"

// # Test Case 2
const s2 = "  hello  world  ";
// Output: "world hello"

const reverseWords = (s) => {
  const ms = s.trim().split(/\s+/).reverse().join(" "); // using regex collapses multiple spaces into one
  return ms;
};

console.log(reverseWords(s2));
