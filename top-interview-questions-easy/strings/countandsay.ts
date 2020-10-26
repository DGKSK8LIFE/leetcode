// Count and Say
function countAndSay(n: number): string {
  let str: string = '1';
  for (let i: number = 1; i < n; i++) {
    let strArray: string[] = str.split('');
    str = '';
    let count: number = 1;
    for (let j: number = 0; j < strArray.length; j++) {
      if (strArray[j] !== strArray[j + 1]) {
        str += count + strArray[j];
        count = 1;
      }
      else {
        count++;
      }
    }
  }
  return str;
};