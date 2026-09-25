/**Ejercicio 1 — Calculadora de descuento
  Aplica un porcentaje de descuento al precio proporcionado.
 */

function calcularDescuento(precio, porcentaje) {
    if (porcentaje < 0 || porcentaje > 100) {
        return "Porcentaje inválido";

    }//if

    return precio - (precio * (porcentaje / 100));

}//calcularDescuento




/** Ejercicio 2 — Validación de contraseña
  Valida que la contraseña tenga mínimo 8 caracteres y al menos un número.
 */

function validarPassword(password) {
    if (typeof password !== 'string') return false;

    const tieneMinimo8Caracteres = password.length >= 8;

    const tieneNumero = /\d/.test(password); // Verifica si contiene al menos un dígito

    return tieneMinimo8Caracteres && tieneNumero;

}//validarPassword



/**Ejercicio 3 — Conversor de temperatura
  Convierte grados Celsius a Fahrenheit.
 */

function celsiusAFahrenheit(celsius) {

    return (celsius * 9 / 5) + 32;

}//celsiusAFahrenheit



/**Ejercicio 4 — Verificador de mayoría de edad
  Retorna true si la edad es mayor o igual a 18, o false si es menor.
 */

function esMayorDeEdad(edad) {

    return edad >= 18;

}//esMayorDeEdad


/**Ejercicio 5 — Generador de nombre completo
  Muestra el nombre y apellido.
 */
function generarNombreCompleto(nombre, apellido) {

    return `${nombre} ${apellido}`;

}//generarNombreCompleto




// Exportación modulle.export
module.exports = {
    calcularDescuento,
    validarPassword,
    celsiusAFahrenheit,
    esMayorDeEdad,
    generarNombreCompleto,
};