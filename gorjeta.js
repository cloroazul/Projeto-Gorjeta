const calcularBtn = document.querySelector('#calcular')
calcularBtn.addEventListener('click', calcularGorjeta)
 
function calcularGorjeta() {
  const total = document.querySelector('#total').value
  const pessoas = document.querySelector('#pessoas').value
  const porcentagem= document.querySelector('#porcentagem').value
 
  if (!total || !pessoas) {
    alert('Campos Vazios.')
  } else {
    const gorjeta = (total * (porcentagem / 100)) / pessoas
 
    const resultadoGorjeta = document.querySelector('#resultadoGorjeta')
    resultadoGorjeta.innerText = 'R$' + gorjeta.toFixed(2)
  }
}