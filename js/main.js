// let total = 0

// document.querySelector('#pumpkin').addEventListener('click', makeZero)
// document.querySelector('#dominosPizza').addEventListener('click', jumanji)
// document.querySelector('#zebra').addEventListener('click', add9)
// document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)

// function makeZero() {
//   total = 0
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function jumanji() {
//   total = total + 3
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function add9() {
//   total = total + 9
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

// function sub2() {
//   total = total - 2
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

class Calculator {

  prevNumber;
  curNumber;
  operand;
  result;

  // constructor (prevNumber, curNumber, operand) {
  //   this.prevNumber = prevNumber
  //   this.curNumber = curNumber
  //   this.operand = operand
  // }

  performOperation() {

    console.log(this.prevNumber, this.curNumber, this.operand)

    switch (this.operand) {
      case "^":
        this.result = +this.prevNumber ^ +this.curNumber
        break;
      case "/":
        this.result = +this.prevNumber / +this.curNumber
        break;
      case "*":
        this.result = +this.prevNumber * +this.curNumber
        break;
      case "-":
        this.result = +this.prevNumber - +this.curNumber
        break;
      case "+":
        this.result = +this.prevNumber + +this.curNumber
        break;
    }
  }
}

let calculator = new Calculator();

let calculatorElement = document.querySelector("#calculator")
calculatorElement.addEventListener('click', getKey)


function getKey(e) {

  if (e.target.nodeName === "SPAN") {
    
    const keyPressed = e.target.innerText
    let inputElement = document.querySelector("#input")
    let outputElement = document.querySelector("#output")
    
    if (!isNaN(keyPressed) || keyPressed === ".") {
      inputElement.innerText = inputElement.innerText + keyPressed
      calculator.curNumber = inputElement.innerText
    } else if (keyPressed === "DEL") {
      inputElement.innerText = inputElement.innerText.slice(0, -1)
      calculator.curNumber = inputElement.innerText
    } else if (keyPressed === "AC") {
      inputElement.innerText = "";
      outputElement.innerText = "";
      calculator.curNumber = 0
      calculator.prevNumber = 0
      calculator.operand = "+"
    } else if (keyPressed === "=") {
      calculator.curNumber = inputElement.innerText
      calculator.performOperation()
      inputElement.innerText = calculator.result
      outputElement.innerText = calculator.prevNumber + " " + calculator.operand + " " + calculator.curNumber
    } else {
      calculator.prevNumber = inputElement.innerText
      calculator.operand = keyPressed
      outputElement.innerText = calculator.prevNumber + " " + calculator.operand
      inputElement.innerText = ""
    }

  }

}


