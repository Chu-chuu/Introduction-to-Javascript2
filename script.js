function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
  function modulus(a, b) {
    return a % b;
  }
  
  function calc() {
    var operator = prompt("CALCULATOR \n Choose  your operator e.g -,+,/,*,%");
    var a = Number(prompt("CALCULATOR \n Insert your first number:"));
    var b = Number(prompt("CALCULATOR \n Insert your second number:"));
  
    if (operator == "+") {
      result = add(a, b);
      alert(a + "+" + b);
    } 
    else if (operator == "-") {
      result = subtract(a, b);
      alert(a + "-" + b);
    }
    else if (operator == "*") {
      result = multiply(a, b);
      alert(a + "*" + b);
    } 
    else if (operator == "/") {
      result = divide(a, b);
      alert(a + "/" + b);
    }
    else if (operator == "%") {
      result = modulus(a, b);
      alert(a + "%" + b);
    }
    else {
      alert("Put a valid operator or number");
    }
    alert(result);
  }

calc();

    function again () {
        let answer = prompt("Do you want to play again? Y/N").toUpperCase()
        while (answer !== "Y" && answer !== "N"){
            alert("Please enter a valid answer (Y/N)")
            answer = prompt("Do you want to play again? Y/N")
        }
        if (answer == "Y"){
            calc()
        }
        else if (answer == "N"){
            alert("Good bye")
        }
    }

    again()
calc();

  
