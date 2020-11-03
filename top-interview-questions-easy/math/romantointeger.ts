// Roman to Integer

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s: string): number {
  const symbols = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let decimal: number = 0;
  for (let i: number = 0; i < s.length; i++) {
    if (s[i] === 'I' && s[i + 1] && (s[i + 1] === 'V' || s[i + 1] === 'X')) {
      decimal -= 1;
      continue;
    }

    if (s[i] === 'X' && s[i + 1] && (s[i + 1] === 'L' || s[i + 1] === 'C')) {
      decimal -= 10;
      continue;
    }

    if (s[i] === 'C' && s[i + 1] && (s[i + 1] === 'D' || s[i + 1] === 'M')) {
      decimal -= 100;
      continue;
    }

    decimal += symbols[s[i]];
  }

  return decimal;
};