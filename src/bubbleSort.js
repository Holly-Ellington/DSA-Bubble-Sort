function bubbleSort(compare, elements) {
  if (Array.isArray(elements)) {
    let inOrder;

    do {
      inOrder = true; // Assume it is in order

      for (
        let index = 0, length = elements.length - 1;
        index < length;
        index++
      ) {
        const leftElement = elements[index];
        const rightElement = elements[index + 1];

        if (compare(leftElement, rightElement) > 0) {
          elements[index] = rightElement;
          elements[index + 1] = leftElement;
          inOrder = false; // The array wasn't in order,  swap elements and re check.
        }
      }
    } while (inOrder === false);
  }
  return elements;
}

module.exports = bubbleSort;