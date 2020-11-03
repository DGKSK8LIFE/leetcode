// Pascal's Triangle
function generate(numRows: number): number[][] {
  const pascal: any[] = [];
  for (let i: number = 0; i < numRows; i++) {
    pascal[i] = [];
    pascal[i][0] = 1;
    for (let j: number = 1; j < i; j++) {
      pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j]
    }
    pascal[i][i] = 1;
  }
  return pascal;
};