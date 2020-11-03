// Valid Parenthesis
function isValid(s: string): boolean {
  const stack = [];

  for (let i: number = 0; i < s.length; i++) {
    let c: string = s.charAt(i);
    switch (c) {
      case '(': stack.push(')');
        break;
      case '[': stack.push(']');
        break;
      case '{': stack.push('}');
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }
  return stack.length === 0;
};