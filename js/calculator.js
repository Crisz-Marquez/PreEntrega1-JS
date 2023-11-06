document.addEventListener("DOMContentLoaded", function() {
    const inicioBtn = document.getElementById("inicioBtn");

    inicioBtn.addEventListener("click", function() {
        console.log("Conectado");

        function suma(a, b) {
            return a + b;
        }

        function resta(a, b) {
            return a - b;
        }

        function multiplicacion(a, b) {
            return a * b;
        }

        function division(a, b) {
            if (b !== 0) {
                return a / b;
            } else {
                return "Error: No se puede dividir por cero.";
            }
        }

        let continuar = true;

        while (continuar) {
            let operacion;
            const operacionesPermitidas = ["+", "-", "*", "/", "salir"];

            do {
                operacion = prompt("Ingrese la operación que desea realizar (+, -, *, /) o escriba 'salir' para terminar:");
            } while (!operacionesPermitidas.includes(operacion.toLowerCase()));

            if (operacion.toLowerCase() === "salir") {
                continuar = false;
                alert("Gracias por usar la calculadora. ¡Hasta luego!");
            } else {
                let numero1, numero2;

                do {
                    numero1 = prompt("Ingrese el primer número");
                    if (isNaN(numero1)) {
                        alert("Por favor, ingrese un primer número válido.");
                    }
                } while (isNaN(numero1));

                do {
                    numero2 = prompt("Ingrese el segundo número");
                    if (isNaN(numero2)) {
                        alert("Por favor, ingrese un segundo número válido.");
                    }
                } while (isNaN(numero2));

                numero1 = parseFloat(numero1);
                numero2 = parseFloat(numero2);

                let resultado;

                switch (operacion) {
                    case "+":
                        resultado = suma(numero1, numero2);
                        break;
                    case "-":
                        resultado = resta(numero1, numero2);
                        break;
                    case "*":
                        resultado = multiplicacion(numero1, numero2);
                        break;
                    case "/":
                        resultado = division(numero1, numero2);
                        break;
                    default:
                        resultado = "Operación inválida";
                }

                alert("El resultado es: " + resultado);
            }
        }
    });
});
