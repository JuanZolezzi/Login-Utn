let user = prompt ('Ingrese su Usuario: ')
let contra = prompt ('Ingrese su Contraseña: ')

console.log(user);
console.log(contra);

if (user == 'Pepe' && contra == 1234) {
    alert ('Bienvenido al Sistema Pepe.')
    window.location.href = '../pages/admin.html'
} else {
    alert ('Contraseña o usuario incorrecto.')
    location.href = '../pages/error.html'
}