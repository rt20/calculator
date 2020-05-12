const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number)=>{
	calculatorScreen.value=number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
	number.addEventListener("click",()=>{
		console.log(event.target.value)
	})
})
// Definisikan Variable untuk melakukan kalkulasi
let prevNumber = ''
let calculationOperator = ''
let currentNumber = ''

// Cara mengaktifkan peng-input-an lebih dari 2 digit angka
const inputNumber = (number)=>{
	if (currentNumber === '0'){
		currentNumber = number
	} else {
	currentNumber += number
	}
}

// Dapatkan masing-masing angka dari constant “numbers”
numbers.forEach((number) => {
	number.addEventListener("click",(event)=>{
		inputNumber(event.target.value)
		updateScreen(currentNumber)
	})
})

//Menambah Click event ke operator tombol-tombol
const operators = document.querySelectorAll(".operator")

operators.forEach((operator)=>{
	operator.addEventListener("click",(event)=>{
		inputOperator(event.target.value)
	})
})

// Definisikan function inputOperator
const inputOperator = (operator)=>{
	if(calculationOperator === ''){
		prevNumber = currentNumber
	}
	
	calculationOperator = operator
	currentNumber= '0'
}

// Tambahkan click event ke tombol sama-dengan (=)
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click',()=>{
	calculate()
	updateScreen(currentNumber)
})

// Definisikan function Calculation
const calculate = ()=>{
	let result=''
	switch(calculationOperator){
	case '+':
		result = parseFloat(prevNumber) + parseFloat(currentNumber)
		break
	case '-':
		result = prevNumber - currentNumber
		break
	case '*':
		result = parseFloat(prevNumber) * parseFloat(currentNumber)
		break
	case '/':
		result = prevNumber / currentNumber
		break
	default:
		return
	}
	// Simpan hasil Kalkulasi ke currentNumber
	currentNumber = result
	calculationOperator = ''
}

// Ambil Element Button dan tambahkan Click Event
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click',()=>{
	clearAll()
	updateScreen(currentNumber)
})

//Definisikan dan jalankan Function clearAll
const clearAll=()=>{
	prevNumber=''
	calculationOperator=''
	currentNumber='0'
}

// Tambahkan Click Event ke element <button>
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click',(event)=>{
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
})

// Definisikan dan jalankan Function inputDecimal
inputDecimal = (dot)=>{
	if(currentNumber.includes('.')){
		return
	}
	currentNumber += dot
}
