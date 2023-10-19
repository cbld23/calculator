const screen = document.getElementById('screen');//Obtener la pantalla
const buttons = document.querySelectorAll('#buttons a');//Obtener todos los botones

// Agregar un manejador de eventos para cada botón
buttons.forEach(button => {
button.addEventListener('click', manejarClick);
});

function manejarClick(e) {
  const key = e.target.dataset.key;//Obtener el valor de 'data-key' del botón clickeado
  if (key === 'clear') {
  // Limpiar la pantalla
  screen.textContent = '';
  } else if (key === 'equal') {
  // Calcular el resultado
    try {
      const result = eval(screen.textContent);
      screen.textContent = result;
    } catch (error) {
    // Mostrar una alerta en caso de error
      alert('Error en la expresión: ' + error.message);
      screen.textContent = '';
      }
  } else {
  // Agregar el valor del botón a la pantalla
    screen.textContent += key;
  }
}