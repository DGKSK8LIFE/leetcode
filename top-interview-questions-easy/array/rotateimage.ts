// Rotate Array
function rotate(matrix: number[][]): void {
  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = i; j < matrix[0].length; j++) {
      let temp: number = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix[0].length / 2; j++) {
      let temp: number = matrix[i][j];
      matrix[i][j] = matrix[i][matrix[0].length - j - 1];
      matrix[i][matrix[0].length - j - 1] = temp;
    }
  }
};