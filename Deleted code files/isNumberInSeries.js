const isNumberInSeries = ( num ) => {
    let current = 0; 
    let step = 3;    

    while (current <= num) {
      // Check if the current number is equal to the input number
      if (current === num) {
        return true;
      }
      // After adding the first number, we add the second consecutive number
      current += step; 
      if (current === num) {
        return true;
      }
      current += 1;

      // Reset step to 3 for the next iteration
      step = 3;
    }
    return false;  
  };

  export default isNumberInSeries;