// console.log('CONNECT');
// localStorage.setItem('user','grover');
// localStorage.setItem('user','joan');
// localStorage.setItem('master','alfonsin');

/// EJERCICIOS
//1 - Crear un formulario de contacto con los siguientes campos:
// Nombre 
// Correo 
// Mensaje 

//2 - Guardar en Local Storage los datos de contacto rellenados 
// del usuario (solo guarda un usuario)
const formNombre = document.getElementById('nombre')
console.log(formNombre)
// const formButtonEnviar = document.getElementById('btsend')

// function onSubmit(e) {
//     e.preventDefault()
//     console.log('hola')
// }
// btn.addEventListener('click',onSubmit)

function onSubmit(e) {
    e.preventDefault();
    const firstNameValue = inputFirstName.value;
    console.log(firstNameValue);
// } 
// function onSubmit(e) {
//     e.preventDefault()
//     const firstNameValue = inputFirstName.value
//     localStorage.setItem('firstName',firstNameValue)
//    }