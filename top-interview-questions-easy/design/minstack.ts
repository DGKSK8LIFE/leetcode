// Min Stack
const MinStack = function (): void {
  this.elements = [];
};

MinStack.prototype.push = function (x: number): void {
  this.elements.push({
    value: x,
    min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
  });
};

MinStack.prototype.pop = function (): void {
  this.elements.pop();
};

MinStack.prototype.top = function (): number {
  return this.elements[this.elements.length - 1].value;
};

MinStack.prototype.getMin = function (): number {
  return this.elements[this.elements.length - 1].min;
};