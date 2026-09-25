const {
  calcularDescuento,
  validarPassword,
  celsiusAFahrenheit,
  esMayorDeEdad,
  generarNombreCompleto,
} = require('./funciones.js');


describe('Pruebas unitarias de funciones.js', () => {



  // Ejercicio 1 — Calculadora de descuento
  describe('calcularDescuento()', () => {
    test('Aplica el descuento correctamente cuando el porcentaje es válido', () => {
      expect(calcularDescuento(1000, 20)).toBe(800);
      expect(calcularDescuento(500, 10)).toBe(450);
    });

    test('Retorna un mensaje de error si el porcentaje es menor a 0 o mayor a 100', () => {
      expect(calcularDescuento(300, 120)).toBe("Porcentaje inválido");
      expect(calcularDescuento(100, -5)).toBe("Porcentaje inválido");

    });
  });




  // Ejercicio 2 — Validación de contraseña
  describe('validarPassword()', () => {
    test('Devuelve un valor verdadero para contraseñas válidas', () => {

      // Uso de toBeTruthy()
      expect(validarPassword("abc12345")).toBeTruthy();
      expect(validarPassword("12345678")).toBeTruthy();
    });

    test('Devuelve un valor falso si no cumple las condiciones', () => {

      // Uso de toBeFalsy() para contraseñas cortas o sin números
      expect(validarPassword("abcdef")).toBeFalsy();
      expect(validarPassword("1234567")).toBeFalsy();
      expect(validarPassword("sololetras")).toBeFalsy();
    });
  });






  // Ejercicio 3 — Conversor de temperatura
  describe('celsiusAFahrenheit()', () => {
    test('Convierte Celsius a Fahrenheit correctamente', () => {
      expect(celsiusAFahrenheit(0)).toBe(32);
      expect(celsiusAFahrenheit(25)).toBe(77);
      expect(celsiusAFahrenheit(-10)).toBe(14);
    });

    test('Devuelve un resultado definido', () => {
      expect(celsiusAFahrenheit(25)).toBeDefined();
    });
  });






  // Ejercicio 4 — Verificador de mayoría de edad
  describe('esMayorDeEdad()', () => {
    test('Devuelve un valor verdadero si la edad es 18 o mayor', () => {

      // Uso de toBeTruthy()
      expect(esMayorDeEdad(18)).toBeTruthy();
      expect(esMayorDeEdad(25)).toBeTruthy();
    });

    test('Devuelve un valor falso si es menor de 18', () => {

      // Uso de toBeFalsy()
      expect(esMayorDeEdad(16)).toBeFalsy();
      expect(esMayorDeEdad(0)).toBeFalsy();
    });
  });







  // Ejercicio 5 — Generador de nombre completo
  describe('generarNombreCompleto()', () => {
    test('Muestra nombre y apellido con un espacio intermedio', () => {
      expect(generarNombreCompleto("Manuel", "Rodríguez")).toBe("Manuel Rodríguez");
      expect(generarNombreCompleto("Bruno", "González")).toBe("Bruno González");
    });

    test('Garantiza que la respuesta no sea indefinida ni nula', () => {
      const resultado = generarNombreCompleto("Manuel", "Rodríguez");

      // Uso de varios Truthiness 
      expect(resultado).toBeDefined();
      expect(resultado).not.toBeNull();
      expect(resultado).not.toBeUndefined();

    });
  });

});