// Parte 1
function Sum(a, b) {
  return a + b;
}

function Rest(a, b) {
  return a - b;
}

function Multi(a, b) {
  return a * b;
}

function Div(a, b) {
  if (b === 0) {
    return 'Error: División por cero';
  }
  return a / b;
}

// Parte 2
function calculadora(operacion) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Por favor, ingresa números válidos.";
  } else {
    if (operacion === 'Sum') {
      result = Sum(num1, num2);
    } else {
      if (operacion === 'Rest') {
        result = Rest(num1, num2);
      } else {
        if (operacion === 'Multi') {
          result = Multi(num1, num2);
        } else {
          if (operacion === 'Div') {
            result = Div(num1, num2);
          } else {
            result = "Operación no válida.";
          }
        }
      }
    }
  }
  document.getElementById("result").innerHTML = `<strong>RESULTADO</strong><br> ${operacion}: ${result}`;
}
