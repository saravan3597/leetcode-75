// Input: s = "abc", t = "ahbgdc"

const s = "abx",
  t = "ahbgdc";

const isSubsequence = (s, t) => {
  let write = 0;
  for (let read = 0; read < t.length; read++) {
    if (t[read] === s[write]) {
      write++;
    }
  }
  return write === s.length;
};

console.log(isSubsequence(s, t));
