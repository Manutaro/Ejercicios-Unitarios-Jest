# Ejercicios Básicos de Pruebas Unitarias con Jest

Este proyecto implementa y valida una serie de funciones básicas en JavaScript mediante pruebas unitarias con el framework **Jest 30.5**, aplicando conceptos clave como la validación de comportamientos, manejo de casos límite y uso de matchers de *Truthiness*.

---

## 🎯 Objetivo

* Validar el comportamiento esperado de funciones JavaScript mediante pruebas unitarias.
* Estructurar y organizar pruebas de manera limpia y legible usando `describe` y `test`.
* Identificar escenarios de prueba reales (casos correctos, casos inválidos y valores límite).
* Aplicar matchers de Jest (`toBe`, `toBeTruthy`, `toBeFalsy`, `toBeDefined`, `not.toBeNull`, `not.toBeUndefined`).
* Documentar profesionalmente el desarrollo de software y el uso ético de IA en la documentación técnica.

---

## Tecnologías y Recursos

* **Lenguaje:** JavaScript (Node.js)
* **Framework de Pruebas:** Jest `^30.5.0`
* **Documentación Oficial:** [Jest Docs](https://jestjs.io/)

---

## 📁 Estructura del Proyecto

```text
ejercicio-jest
│
├── funciones.js          
├── funciones.test.js     
├── package.json          
├── README.md             
└── .gitignore       
```

---

## Instalación y Ejecución

1. Clonar o descargar este repositorio.
2. Instalar las dependencias necesarias:
   ```bash
   npm install
   ```
3. Ejecutar la suite de pruebas unitarias:
   ```bash
   npm test
   ```

---

## 💻 Código Fuente (`funciones.js`)

```javascript
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
```

---

## 🧪 Pruebas Unitarias (`funciones.test.js`)

```javascript
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
```

---

## ⚙️ Descripción de Funciones y Pruebas Unitarias

### 1. Calculadora de descuento — `calcularDescuento(precio, porcentaje)`
* **Descripción:** Calcula el precio final tras aplicar un porcentaje de descuento. Si el porcentaje es menor a 0 o mayor a 100, retorna `"Porcentaje inválido"`.
* **Pruebas realizadas:**
  * Descuentos válidos (1000 con 20% → 800, 500 con 10% → 450).
  * Porcentaje mayor a 100 (300 con 120% → `"Porcentaje inválido"`).
  * Porcentaje menor a 0 (100 con -5% → `"Porcentaje inválido"`).
* **Matchers usados:** `.toBe()`

### 2. Validación de contraseña — `validarPassword(password)`
* **Descripción:** Valida que la contraseña sea un `string`, tenga al menos 8 caracteres de longitud y contenga como mínimo un dígito numérico. Devuelve `true` si cumple o `false` en caso contrario.
* **Pruebas realizadas:**
  * Contraseñas válidas (`"abc12345"`, `"12345678"`).
  * Contraseñas inválidas por longitud o falta de números (`"abcdef"`, `"1234567"`, `"sololetras"`).
* **Matchers usados:** `.toBeTruthy()`, `.toBeFalsy()`

### 3. Conversor de temperatura — `celsiusAFahrenheit(celsius)`
* **Descripción:** Convierte grados Celsius a Fahrenheit utilizando la fórmula °F = (°C × 9/5) + 32.
* **Pruebas realizadas:**
  * Conversión de valores positivos, cero y negativos (`0` → 32, `25` → 77, `-10` → 14).
  * Verificación de retorno definido.
* **Matchers usados:** `.toBe()`, `.toBeDefined()`

### 4. Verificador de mayoría de edad — `esMayorDeEdad(edad)`
* **Descripción:** Determina si una persona es mayor de edad. Retorna `true` para edades mayores o iguales a 18, y `false` para menores.
* **Pruebas realizadas:**
  * Mayoría de edad exactos y superiores (18, 25).
  * Minoría de edad e inicios de rango (16, 0).
* **Matchers usados:** `.toBeTruthy()`, `.toBeFalsy()`

### 5. Generador de nombre completo — `generarNombreCompleto(nombre, apellido)`
* **Descripción:** Retorna una cadena concatenando el nombre y el apellido separados por un espacio.
* **Pruebas realizadas:**
  * Concatenación correcta (`"Manuel"`, `"Rodríguez"` → `"Manuel Rodríguez"`; `"Bruno"`, `"González"` → `"Bruno González"`).
  * Verificación de integridad del retorno (no nulo ni indefinido).
* **Matchers usados:** `.toBe()`, `.toBeDefined()`, `.not.toBeNull()`, `.not.toBeUndefined()`

---

## 📊 Matriz de Casos de Prueba

| Función | Entrada / Argumentos | Resultado Esperado | Matcher de Jest Utilizado |
| :--- | :--- | :--- | :--- |
| `calcularDescuento` | `(1000, 20)` | `800` | `.toBe(800)` |
| `calcularDescuento` | `(500, 10)` | `450` | `.toBe(450)` |
| `calcularDescuento` | `(300, 120)` | `"Porcentaje inválido"` | `.toBe("Porcentaje inválido")` |
| `calcularDescuento` | `(100, -5)` | `"Porcentaje inválido"` | `.toBe("Porcentaje inválido")` |
| `validarPassword` | `"abc12345"` | `true` | `.toBeTruthy()` |
| `validarPassword` | `"12345678"` | `true` | `.toBeTruthy()` |
| `validarPassword` | `"abcdef"` | `false` | `.toBeFalsy()` |
| `validarPassword` | `"1234567"` | `false` | `.toBeFalsy()` |
| `validarPassword` | `"sololetras"` | `false` | `.toBeFalsy()` |
| `celsiusAFahrenheit` | `0` | `32` | `.toBe(32)` |
| `celsiusAFahrenheit` | `25` | `77` / Definido | `.toBe(77)` / `.toBeDefined()` |
| `celsiusAFahrenheit` | `-10` | `14` | `.toBe(14)` |
| `esMayorDeEdad` | `18` | `true` | `.toBeTruthy()` |
| `esMayorDeEdad` | `25` | `true` | `.toBeTruthy()` |
| `esMayorDeEdad` | `16` | `false` | `.toBeFalsy()` |
| `esMayorDeEdad` | `0` | `false` | `.toBeFalsy()` |
| `generarNombreCompleto` | `"Manuel", "Rodríguez"` | `"Manuel Rodríguez"` | `.toBe("Manuel Rodríguez")` |
| `generarNombreCompleto` | `"Bruno", "González"` | `"Bruno González"` | `.toBe("Bruno González")` |
| `generarNombreCompleto` | `"Manuel", "Rodríguez"` | Valor definido y no nulo | `.toBeDefined()`, `.not.toBeNull()`, `.not.toBeUndefined()` |

---

---

## Aprendizajes y Conclusiones

* **Uso de Matchers de Truthiness:** Comprobamos la utilidad de `toBeTruthy()` y `toBeFalsy()` al trabajar con valores booleanos, así como la importancia de `toBeDefined()`, `not.toBeNull()` y `not.toBeUndefined()` para garantizar que las funciones devuelvan datos válidos en memoria.
* **Aislamiento de Pruebas:** El uso de bloques `describe()` agrupados por función permite mantener una suite de pruebas organizada y fácil de mantener.
* **Cultura de Pruebas:** Diseñar pensando en qué se va a probar ayuda a anticipar validaciones y condiciones de error antes de dar por terminado el código de desarrollo.