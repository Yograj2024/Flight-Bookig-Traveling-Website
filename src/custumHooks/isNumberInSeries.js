const isNumberInSeries = ( num ) => {
    let current = 0; // Series starts from 0
    let step = 3;    // Step for the first number (3rd after each pair)

    while (current <= num) {
      // Condition 1: Check if the current number is equal to the input number
      if (current === num) {
        return true;
      }
      // After adding the first number, we add the second consecutive number
      current += step; // Increment current by 3 for the first number
      if (current === num) {
        return true;
      }
      current += 1;     // Add the next consecutive number

      // Reset step to 3 for the next iteration
      step = 3;
    }
    return false;  // If number is not found in the series
  };

  export default isNumberInSeries;