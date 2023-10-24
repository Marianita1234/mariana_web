const buttonClick = document.getElementById('click_button');
const myForm = document.getElementById('my_form');
const mySelect = document.getElementById('myselect');
const myInput = document.getElementById('myinput');
const myDiv = document.getElementById('mydiv');
const input = document.getElementById('miInput');
const resultado = document.getElementById('resultado');
const botonKeyup = document.getElementById('botonKeyup');
const mostrarTexto = document.getElementById('mostrarTexto');
const botonKeydown = document.getElementById('botonKeydown');
const botonFocus = document.getElementById('botonFocus');
const botonBlur = document.getElementById('boton');


buttonClick.addEventListener('click', () => {
    alert('Me diste click');
});

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Formulario enviado');
});

mySelect.addEventListener('change', () => {
    console.log('valor: ' + mySelect.id)
});

myInput.addEventListener('input', () => {
    console.log('valor: ' + myInput.value)
});

myDiv.addEventListener('mouseover', () => {
    myDiv.classList.add('mouseover');
});

myDiv.addEventListener('mouseout', () => {
    myDiv.classList.remove('mouseover');
});
miInput.addEventListener('keyup', function(event) {
    const textoIngresado = event.target.value;
    mostrarTexto.textContent = textoIngresado || 'Input vacío';
});
botonKeyup.addEventListener('click', function() {
    const eventoKeyup = new KeyboardEvent('keyup', { key: 'a' }); // Puedes especificar la tecla que desees
            miInput.dispatchEvent(eventoKeyup);
        });

        miInput.addEventListener('keydown', function(event) {
            const textoIngresado = event.target.value;
            mostrarTexto.textContent = textoIngresado || 'Input vacío';
        });
        botonKeydown.addEventListener('click', function() {

        });
            const miInput = document.getElementById('miInput');
            miInput.addEventListener('keydown', function(event) {
                mostrarTexto.textContent = textoIngresado || 'Input vacío';
            });
            botonKeydown.addEventListener('click', function() {
                const eventoKeydown = new KeyboardEvent('keydown', { key: 'a' }); // Puedes especificar la tecla que desees
                miInput.dispatchEvent(eventoKeydown);
            });
          
            botonFocus.addEventListener('click', function() {
                // Enfoca manualmente el campo de entrada.
                miInput.focus();
            });
            botonBlur.addEventListener('click', function() {
                // Quita el enfoque del campo de entrada.
                miInput.blur();
            });



