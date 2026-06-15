Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"

Constraints:

1 <= s.length <= 3 \* 105
s consist of printable ASCII characters.

Problems with your normal approach code:

String concatenation in a loop (newStr += ...) — for very large strings (your constraint says up to 300,000 chars), repeated string concatenation is wasteful. Strings in JS are immutable, so each += can trigger copying. Building an array and joining at the end is cheaper.
Two full passes plus an extra array (vowels) — you're doing more work than needed. A two-pointer approach solves this in one pass with O(1) extra lookups.
["a","e","i","o","u"].includes(character.toLowerCase()) — this is fine performance-wise (array of 5), but calling .toLowerCase() twice (once per loop) is unnecessary overhead at scale. Minor, but adds up over 300k iterations × 2 passes.
