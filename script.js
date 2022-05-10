var subtrair = document.querySelector('#subtrair')
var adicionar = document.querySelector('#adicionar')
var currentNumber = document.querySelector('#currentNumber')  
var contador = 0;

subtrair.addEventListener('click', function() {
  contador -= 1
  if(contador < -10) {
    contador = 0
    currentNumber.innerHTML = contador;
  }else {
    currentNumber.innerHTML = contador;
  }
    
})

adicionar.addEventListener('click', function() {
  contador += 1
  if(contador > 10) {
    contador = 0
    currentNumber.innerHTML = contador;
  }else {
    currentNumber.innerHTML = contador;
  }
})

console.log(contador)