
   let display = document.getElementById('display');
   let historial = document.getElementById('historial');

   function appendToDisplay(value) {
      display.value += value;
   }

   function clearDisplay() {
      display.value = '';
   }

   function calcular() {
      try {
         let result = eval(display.value);
         let operacion = display.value;
         display.value = result;
         addToHistorial(operacion, result);
      } catch (error) {
         display.value = 'Error';
      }
   }

   function addToHistorial(operacion, result) {
      let listItem = document.createElement('li');
      listItem.textContent = operacion + ' = ' + result;
      historial.appendChild(listItem);
      localStorage.setItem('historial', historial.innerHTML);
   }

   function clearHistorial() {
      historial.innerHTML = '';
      localStorage.removeItem('historial');
   }

   // Cargar historial desde localStorage al cargar la página
   window.onload = function() {
      let storedHistory = localStorage.getItem('historial');
      if (storedHistory) {
         historial.innerHTML = storedHistory;
      }
   
};