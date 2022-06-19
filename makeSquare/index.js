class Rectangle {
  /**
   * @param {number} width
   * @param {number} height
   */
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const makeSquare = () => {
  return (Square = new Rectangle(40, 40));
};

// Sample usage - do not modify
console.log(makeSquare());
