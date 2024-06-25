// Step 1: Define the calculator class
class Calculator {
  // Step 2: Constructor to initialize the current input and result
  constructor() {
    this.currentInput = "";
    this.result = 0;
  }

  // Step 3: Method to add number or operator to the current input
  input(char) {
    this.currentInput += char;
  }

  // Step 4: Method to clear the current input
  clear() {
    this.currentInput = "";
  }

  // Step 5: Method to evaluate the current input and update the result
  calculate() {
    try {
      this.result = eval(this.currentInput);
      this.currentInput = String(this.result);
    } catch (error) {
      console.error("Error in calculation:", error);
      this.clear();
    }
  }

  // Step 6: Method to get the current result
  getResult() {
    return this.result;
  }
}

// Step 7: Example usage
const calc = new Calculator();
calc.input("10");
calc.input("+");
calc.input("20");
calc.calculate(); // Perform the calculation
console.log(calc.getResult()); // Output the result