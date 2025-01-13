

Array.prototype.rearrangeArray = function <T>(): T[] {
    if (this.length === 0) return this; // Handle empty array
    const lastElement = this.pop(); // Remove the last element
    if (lastElement !== undefined) {
      this.unshift(lastElement); // Add it to the beginning
    }
    return this;
  };
  