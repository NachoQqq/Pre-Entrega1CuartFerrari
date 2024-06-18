//let nombre = '';
//
//while (nombre == '') {
//    nombre = prompt('Ingrese su Nombre');
//
//    if (nombre != '') {
//        alert('Bienvenido ' + nombre);
//    } else {
//        alert('Por favor complete el campo con su nombre');
//    }
//}
//
//
//let edad = prompt('Ingrese su edad:');
//
//edad = Number(edad);
//
//if (edad <= 0) {
//    alert('Por favor, ingrese una edad válida');
//} else if (edad >= 18) {
//    alert('Felicidades '+nombre+' tiene edad suficiente para ingresar a la web');
//
//    if (edad >= 65) {
//        alert('Usted es elegible para un cupón de descuento de 15% en toda la web');
//    }
//} else {
//    alert('Usted no tiene la edad suficiente para ingresar a esta web');
//}

function solicitarNombre() {
    let nombre = '';
    while (nombre === '') {
        nombre = prompt('Ingrese su Nombre');
        if (nombre !== '') {
            alert('Bienvenido ' + nombre);
        } else {
            alert('Por favor complete el campo con su nombre');
        }
    }
    return nombre;
}

function solicitarEdad() {
    let edad = 0;
    while (edad <= 0) {
        edad = Number(prompt('Ingrese su edad:'));
        if (edad <= 0) {
            alert('Por favor, ingrese una edad válida');
        }
    }
    return edad;
}

function evaluarEdad(edad, nombre) {
    if (edad >= 18) {
        alert('Felicidades ' + nombre + ', tiene edad suficiente para ingresar a la web');

        if (edad >= 65) {
            alert('Usted es elegible para un cupón de descuento de 15% en toda la web');
        }
    } else {
        alert('Usted no tiene la edad suficiente para ingresar a esta web');
    }
}


    let nombre = solicitarNombre();
    let edad = solicitarEdad();
    evaluarEdad(edad, nombre);
